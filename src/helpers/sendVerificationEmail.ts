import VerificationEmail from "../../emails/VerificationEmail";
import { resend } from "./../lib/resend";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verfyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystry Message | Verification Code",
      react: VerificationEmail({ username, otp: verfyCode }),
    });
    return {
      success: true,
      message: "send verification email successfully",
    };
  } catch (error) {
    console.log("error sending verification email", error);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
