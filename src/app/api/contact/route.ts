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
		const submittedAt = formatTimestamp(new Date());

		const { error } = await resend.emails.send({
			from,
			to: recipients,
			replyTo: email,
			subject: `New contact form inquiry from ${name}${subject ? `: ${subject}` : ""}`,
			html: buildContactEmailHtml({ name, email, subject, message, submittedAt }),
			text: buildContactEmailText({ name, email, subject, message, submittedAt }),
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

function formatTimestamp(date: Date) {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		timeZoneName: "short",
	}).format(date);
}

type ContactEmailTemplateData = {
	name: string;
	email: string;
	subject: string;
	message: string;
	submittedAt: string;
};

function buildContactEmailHtml(data: ContactEmailTemplateData) {
	const escapedName = escapeHtml(data.name);
	const escapedEmail = escapeHtml(data.email);
	const escapedSubject = escapeHtml(data.subject || "Not provided");
	const escapedMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");
	const escapedSubmittedAt = escapeHtml(data.submittedAt);
	const replyMailto = `mailto:${encodeURIComponent(data.email)}`;

	return `
<div style="margin:0;padding:0;background:#f3f4ef;font-family:Arial,Helvetica,sans-serif;color:#1f2a1f;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4ef;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #d8ddce;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:18px 22px;background:linear-gradient(125deg,#0f7a53,#0a5d3f);color:#ffffff;">
              <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.9;">New Inquiry</p>
              <h2 style="margin:6px 0 0;font-size:22px;line-height:1.25;">Accelerated Learning Center Contact Form</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 22px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e9edde;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#0a5d3f;text-transform:uppercase;letter-spacing:0.06em;">Name</p>
                    <p style="margin:5px 0 0;font-size:15px;line-height:1.45;color:#1f2a1f;">${escapedName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e9edde;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#0a5d3f;text-transform:uppercase;letter-spacing:0.06em;">Email</p>
                    <p style="margin:5px 0 0;font-size:15px;line-height:1.45;color:#1f2a1f;">${escapedEmail}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e9edde;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#0a5d3f;text-transform:uppercase;letter-spacing:0.06em;">Subject</p>
                    <p style="margin:5px 0 0;font-size:15px;line-height:1.45;color:#1f2a1f;">${escapedSubject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <p style="margin:0;font-size:12px;font-weight:700;color:#0a5d3f;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
                    <p style="margin:8px 0 0;font-size:15px;line-height:1.6;color:#1f2a1f;">${escapedMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 22px 22px;">
              <a href="${replyMailto}" style="display:inline-block;background:#0f7a53;color:#ffffff;text-decoration:none;padding:10px 16px;border-radius:999px;font-weight:700;font-size:14px;">Reply to Sender</a>
              <p style="margin:14px 0 0;font-size:12px;color:#617161;">Submitted: ${escapedSubmittedAt}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>`.trim();
}

function buildContactEmailText(data: ContactEmailTemplateData) {
	return [
		"Accelerated Learning Center Contact Form",
		"",
		`Name: ${data.name}`,
		`Email: ${data.email}`,
		`Subject: ${data.subject || "Not provided"}`,
		"",
		"Message:",
		data.message,
		"",
		`Submitted: ${data.submittedAt}`,
	].join("\n");
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
