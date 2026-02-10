"use server";

import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(formData: FormData) {
    const email = formData.get("email") as string;

    if (!email) {
        return { error: "Email is required" };
    }

    try {
        // 1. Add to Supabase Database (optional, acting as a backup)
        const { error: dbError } = await supabase
            .from("subscribers")
            .insert([{ email }]);

        if (dbError) {
            // Handle duplicate email etc.
            console.error("Supabase Error:", dbError);
            if (dbError.code === "23505") { // Unique violation
                return { error: "You are already subscribed!" };
            }
        }

        // 2. Send Welcome Email via Resend
        const { error: emailError } = await resend.emails.send({
            from: "MarketAlpha <onboarding@resend.dev>", // User needs to update this domain
            to: [email],
            subject: "Welcome to MarketAlpha",
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Welcome to MarketAlpha! 🚀</h1>
          <p>You're now on the list to receive daily market insights.</p>
          
          <hr style="border: 1px solid #eaeaea; margin: 20px 0;" />
          
          <h3>While you wait for tomorrow's report...</h3>
          <p>Here are the 3 tools we use daily to analyze the markets:</p>
          
          <ul style="padding-left: 20px;">
            <li style="margin-bottom: 10px;">
              <strong><a href="https://www.tradingview.com/?aff_id=See_Note_Below_To_Get_Yours" style="color: #22c55e;">TradingView</a></strong>: The #1 charting platform.
            </li>
            <li style="margin-bottom: 10px;">
              <strong><a href="https://shop.ledger.com/?r=See_Note" style="color: #22c55e;">Ledger Nano X</a></strong>: Secure your crypto profits.
            </li>
            <li style="margin-bottom: 10px;">
              <strong><a href="https://coinbase.com/join/See_Note" style="color: #22c55e;">Coinbase</a></strong>: Best place to buy Bitcoin.
            </li>
          </ul>

          <p style="font-size: 12px; color: #666;">(Note: These are partner links that support our newsletter at no cost to you!)</p>
        </div>
      `,
        });

        if (emailError) {
            console.error("Resend Error:", emailError);
            return { error: "Failed to send welcome email." };
        }

        return { success: "Subscribed successfully!" };
    } catch (error) {
        console.error("Unexpected Error:", error);
        return { error: "Something went wrong. Please try again." };
    }
}
