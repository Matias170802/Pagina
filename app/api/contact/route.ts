import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "MCDevelopments <onboarding@resend.dev>";
  const to = process.env.RESEND_TO || "mcdevelopments@mcdevelopments.tech";

  if (!apiKey) {
    return Response.json(
      { error: "RESEND_API_KEY no está configurada" },
      { status: 500 }
    );
  }

  const body = await request.json();
  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const message = String(body?.message || "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Faltan campos requeridos" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "No se pudo enviar el mensaje" },
      { status: 500 }
    );
  }
}
