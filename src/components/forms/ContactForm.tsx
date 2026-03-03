"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type ContactFormState = {
	name: string;
	email: string;
	subject: string;
	message: string;
	website: string;
};

type SubmitState = {
	type: "idle" | "loading" | "success" | "error";
	message: string;
};

const initialFormState: ContactFormState = {
	name: "",
	email: "",
	subject: "",
	message: "",
	website: "",
};

export function ContactForm() {
	const [formState, setFormState] = useState<ContactFormState>(initialFormState);
	const [submitState, setSubmitState] = useState<SubmitState>({
		type: "idle",
		message: "Most messages receive a same-day response.",
	});
	const [formStartedAt] = useState(() => Date.now());

	function handleInputChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		const { name, value } = event.target;
		setFormState((current) => ({ ...current, [name]: value }));
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (submitState.type === "loading") {
			return;
		}

		setSubmitState({
			type: "loading",
			message: "Sending your message...",
		});

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formState.name,
					email: formState.email,
					subject: formState.subject,
					message: formState.message,
					website: formState.website,
					formStartedAt,
				}),
			});

			const payload = (await response.json().catch(() => null)) as
				| { error?: string; ok?: boolean }
				| null;

			if (!response.ok) {
				throw new Error(payload?.error ?? "Submit failed");
			}

			setFormState(initialFormState);
			setSubmitState({
				type: "success",
				message: "Thanks. Your inquiry has been sent successfully.",
			});
		} catch (error) {
			const message =
				error instanceof Error
					? error.message
					: "Could not send your message. Please try again.";
			setSubmitState({ type: "error", message });
		}
	}

	const isSubmitting = submitState.type === "loading";
	const statusClass =
		submitState.type === "success"
			? "form-note form-note-success"
			: submitState.type === "error"
				? "form-note form-note-error"
				: "form-note";

	return (
		<form className="contact-form" onSubmit={handleSubmit} noValidate>
			<div className="form-intro">
				<p className="card-kicker">Send Message</p>
				<h3>Tell us what you need</h3>
				<p>Add brief details so we can route your message and respond quickly.</p>
			</div>

			<div className="form-row form-row-2">
				<label className="form-field">
					<span>Full Name</span>
					<input
						type="text"
						name="name"
						placeholder="Your full name"
						value={formState.name}
						onChange={handleInputChange}
						required
					/>
				</label>
				<label className="form-field">
					<span>Email Address</span>
					<input
						type="email"
						name="email"
						placeholder="you@example.com"
						value={formState.email}
						onChange={handleInputChange}
						required
					/>
				</label>
			</div>

			<label className="form-field">
				<span>Subject</span>
				<input
					type="text"
					name="subject"
					placeholder="Enrollment, donation, sponsorship..."
					value={formState.subject}
					onChange={handleInputChange}
				/>
			</label>

			<label className="form-field">
				<span>Message</span>
				<textarea
					name="message"
					rows={7}
					placeholder="Write your message"
					value={formState.message}
					onChange={handleInputChange}
					required
				/>
			</label>

			<div className="form-honeypot" aria-hidden="true">
				<label>
					Website
					<input
						type="text"
						name="website"
						tabIndex={-1}
						autoComplete="off"
						value={formState.website}
						onChange={handleInputChange}
					/>
				</label>
			</div>

			<div className="form-actions">
				<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
					{isSubmitting ? "Sending..." : "Submit Message"}
				</button>
				<p className={statusClass} role="status" aria-live="polite">
					{submitState.message}
				</p>
			</div>
		</form>
	);
}
