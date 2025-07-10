"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_TOKEN);

export const sendEmail = async (
    name: string,
    email: string,
    subject: string,
    message: string
) => {
    try {
        // Validate required fields
        if (!name || !email || !subject || !message) {
            throw new Error("All fields are required");
        }

        // Send email
        const { data, error } = await resend.emails.send({
            from: "Euger Bonete <onboarding@resend.dev>", // Replace with your verified domain
            to: ["eugerbone@gmail.com"], // Replace with your email
            subject: `Contact Form: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f9f9f9; border-radius: 4px;">
              <strong>${name}</strong> &lt;${email}&gt;
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Subject:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f9f9f9; border-radius: 4px;">
              ${subject}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
            <div style="margin: 0; padding: 15px; background-color: #f9f9f9; border-radius: 4px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            throw new Error("Failed to send email");
        }

        return { success: true, data };
    } catch (error) {
        console.error("Send email error:", error);
        throw error;
    }
};
