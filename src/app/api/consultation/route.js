const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city = "", interest = "", budget = "", message = "" } = body ?? {};

    if (
      typeof name !== "string" || name.trim().length < 2 || name.length > 80 ||
      typeof email !== "string" || !emailPattern.test(email) || email.length > 120 ||
      typeof phone !== "string" || phone.trim().length < 7 || phone.length > 20 ||
      typeof city !== "string" || city.length > 80 ||
      typeof interest !== "string" || interest.length > 80 ||
      typeof budget !== "string" || budget.length > 80 ||
      typeof message !== "string" || message.length > 1000
    ) {
      return Response.json({ error: "Please check the form fields and try again." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONSULTATION_TO_EMAIL;

    if (!apiKey || !from || !to) {
      return Response.json(
        { error: "The consultation email service is not configured yet. Please contact the site administrator." },
        { status: 503 }
      );
    }

    const safe = (value) => String(value).replace(/[<>&"]/g, "");
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Sofaliving consultation request from ${safe(name)}`,
        text: [
          `Name: ${safe(name)}`,
          `Email: ${safe(email)}`,
          `Phone: ${safe(phone)}`,
          `City: ${safe(city)}`,
          `Interest: ${safe(interest)}`,
          `Budget: ${safe(budget)}`,
          `Message: ${safe(message)}`,
        ].join("\n"),
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      return Response.json({ error: "We could not send your request. Please try again later." }, { status: 502 });
    }

    return Response.json({ ok: true, message: "Consultation request sent." }, { status: 200 });
  } catch {
    return Response.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}
