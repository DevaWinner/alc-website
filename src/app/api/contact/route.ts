import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
	name: string;
	email: string;
	subject?: string;
	message: string;
	website?: string;
	formStartedAt?: number;
};

type RateEntry = {
	count: number;
	resetAt: number;
};

const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MIN_FORM_FILL_TIME_MS = 3000;

const globalRateLimitStore = globalThis as typeof globalThis & {
	__contactRateLimitStore?: Map<string, RateEntry>;
};

const rateLimitStore =
	globalRateLimitStore.__contactRateLimitStore ?? new Map<string, RateEntry>();
globalRateLimitStore.__contactRateLimitStore = rateLimitStore;

export async function POST(req: Request) {
	try {
		const payload: unknown = await req.json();
		if (!isContactPayload(payload)) {
			return Response.json({ error: "Invalid payload" }, { status: 400 });
		}

		const name = payload.name.trim();
		const email = payload.email.trim();
		const subject = (payload.subject ?? "").trim();
		const message = payload.message.trim();
		const honeypot = (payload.website ?? "").trim();
		const formStartedAt = payload.formStartedAt;

		if (honeypot) {
			// Pretend success for bots.
			return Response.json({ ok: true });
		}

		if (!name || !email || !message) {
			return Response.json({ error: "Missing fields" }, { status: 400 });
		}

		if (!isEmail(email)) {
			return Response.json(
				{ error: "Please enter a valid email address." },
				{ status: 400 },
			);
		}

		if (
			typeof formStartedAt === "number" &&
			Number.isFinite(formStartedAt) &&
			Date.now() - formStartedAt < MIN_FORM_FILL_TIME_MS
		) {
			return Response.json(
				{ error: "Please wait a moment and try again." },
				{ status: 400 },
			);
		}

		const ipAddress = getRequestIp(req) ?? "unknown";
		const rateLimitState = consumeRateLimit(ipAddress);
		if (rateLimitState.limited) {
			return Response.json(
				{ error: "Too many requests. Please try again soon." },
				{
					status: 429,
					headers: {
						"Retry-After": String(rateLimitState.retryAfterSeconds),
					},
				},
			);
		}

		const apiKey = process.env.RESEND_API_KEY;
		const from = process.env.CONTACT_FROM_EMAIL;
		const recipients = parseRecipients(process.env.CONTACT_TO_EMAIL);

		if (!apiKey || !from || recipients.length === 0) {
			console.error(
				"Contact form email configuration is missing. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.",
			);
			return Response.json(
				{ error: "Email service is not configured." },
				{ status: 500 },
			);
		}

		const resend = new Resend(apiKey);

		const { error } = await resend.emails.send({
			from,
			to: recipients,
			replyTo: email,
			subject: `New contact form inquiry from ${name}${subject ? `: ${subject}` : ""}`,
			html: `
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Subject:</b> ${escapeHtml(subject || "Not provided")}</p>
        <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
		});

		if (error) {
			console.error("Resend error:", error);
			return Response.json({ error: "Failed to send" }, { status: 500 });
		}

		return Response.json({ ok: true });
	} catch (error) {
		console.error("Contact route failed:", error);
		return Response.json({ error: "Failed to send" }, { status: 500 });
	}
}

function isContactPayload(value: unknown): value is ContactPayload {
	if (!value || typeof value !== "object") {
		return false;
	}

	const entry = value as Record<string, unknown>;

	return (
		typeof entry.name === "string" &&
		typeof entry.email === "string" &&
		typeof entry.message === "string" &&
		(entry.subject === undefined || typeof entry.subject === "string") &&
		(entry.website === undefined || typeof entry.website === "string") &&
		(entry.formStartedAt === undefined || typeof entry.formStartedAt === "number")
	);
}

function isEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseRecipients(value: string | undefined) {
	if (!value) {
		return [];
	}

	return value
		.split(",")
		.map((item) => item.trim())
		.filter(Boolean);
}

function escapeHtml(value: string) {
	return value.replace(/[&<>"']/g, (char) => {
		return (
			{
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
			}[char] ?? char
		);
	});
}

function getRequestIp(req: Request) {
	const forwardedFor = req.headers.get("x-forwarded-for");
	if (forwardedFor) {
		const firstIp = forwardedFor.split(",")[0]?.trim();
		if (firstIp) {
			return firstIp;
		}
	}

	return req.headers.get("x-real-ip");
}

function consumeRateLimit(ipAddress: string) {
	const now = Date.now();

	for (const [key, entry] of rateLimitStore.entries()) {
		if (entry.resetAt <= now) {
			rateLimitStore.delete(key);
		}
	}

	const existing = rateLimitStore.get(ipAddress);
	if (!existing) {
		rateLimitStore.set(ipAddress, {
			count: 1,
			resetAt: now + RATE_LIMIT_WINDOW_MS,
		});
		return { limited: false, retryAfterSeconds: 0 };
	}

	if (existing.resetAt <= now) {
		rateLimitStore.set(ipAddress, {
			count: 1,
			resetAt: now + RATE_LIMIT_WINDOW_MS,
		});
		return { limited: false, retryAfterSeconds: 0 };
	}

	if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
		return {
			limited: true,
			retryAfterSeconds: Math.max(
				1,
				Math.ceil((existing.resetAt - now) / 1000),
			),
		};
	}

	existing.count += 1;
	rateLimitStore.set(ipAddress, existing);
	return { limited: false, retryAfterSeconds: 0 };
}
