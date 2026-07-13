import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { profile } from "@/content/profile";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    );
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set — contact form cannot deliver mail.",
    );
    return NextResponse.json(
      { error: "The contact form isn't fully configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: subject?.trim() ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Message couldn't be sent. Please try again or email me directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Message couldn't be sent. Please try again or email me directly." },
      { status: 500 },
    );
  }
}
