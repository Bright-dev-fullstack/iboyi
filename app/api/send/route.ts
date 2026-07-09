import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const data = await resend.emails.send({
            from: "onboarding@resend.dev", 
            to: ["iboyibright1@gmail.com"], // <-- Removed the space here
            subject: `New Portfolio Message: ${subject}`,
            replyTo: email as string, // <-- Fixed the TS error here
            html: `
                <h3>New message from ${name}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}