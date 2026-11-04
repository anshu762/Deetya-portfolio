import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  category: z.string().min(1, "Please select an inquiry category."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, category, message } = result.data;

    // Log the message cleanly to server console
    console.log("=== NEW CONTACT MESSAGE RECEIVED ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Category: ${category}`);
    console.log(`Message: ${message}`);
    console.log("=====================================");

    // In production, configure RESEND_API_KEY or SMTP credentials
    // For local and Vercel deployments, this route successfully validates and accepts submissions.
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
