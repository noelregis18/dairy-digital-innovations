
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const RECIPIENT_EMAIL = "noel.regis04@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message } = await req.json();

    // Validate input data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    // In a real application, you would send an email here using a service like SendGrid, AWS SES, or Resend
    // For now, we'll log the data and simulate a successful response
    console.log("Contact form submission:", { name, email, message });

    // Here you would typically call an email service API
    // For example with Resend (after adding RESEND_API_KEY to your Supabase secrets)
    // const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    // await resend.emails.send({
    //   from: "contact@adventdairyfarms.com",
    //   to: RECIPIENT_EMAIL,
    //   subject: `New contact form submission from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${message}</p>`
    // });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    return new Response(
      JSON.stringify({ error: "Failed to process contact form" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
