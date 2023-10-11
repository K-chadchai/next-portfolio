import { ErrorResponse, Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";
import { type NextRequest, type NextResponse } from "next/server";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
import { FormMail } from "@/components/email-section";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest, res: NextApiResponse) {
  const { email, subject, message }: FormMail = await req.json();

  console.log("data.email: ", email);
  console.log("subject: ", subject);
  console.log("message: ", message);

  try {
    if (!subject) {
      return res.status(400);
    }

    const payload: CreateEmailOptions = {
      from: fromEmail ? fromEmail.toString() : `work.chadchai@gmail.com`,
      to: ["work.chadchai@gmail.com", email],
      subject: subject,
      text: message,
    };

    // Sending email
    const data = await resend.emails.send(payload);

    // Check for success or error response from the email sending service
    if (data.id) return new Response(data.id);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error sending email:", error);
    return new Response("ERROR!");
  }

  return new Response("Hello, Next.js!");
}
