import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
        return new Response(JSON.stringify({ message: "Todos os campos são obrigatórios" }), { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `📩 Nova mensagem do site - Doug Rock Dev Front-end`,
            text: `
            Nova mensagem recebida pelo site.

            Nome: ${name}
            E-mail: ${email}
            Telefone: ${phone}

            Mensagem:
            ${message}
            `,

            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 8px;">
                
                <h2 style="margin-top:0;color:#111;">
                📩 Nova mensagem do site
                </h2>

                <p style="color:#555;margin-bottom:24px;">
                Você recebeu uma nova mensagem através do formulário do seu site.
                </p>

                <table style="width:100%;border-collapse:collapse;">
                <tr>
                    <td style="padding:8px 0;font-weight:bold;">Nome:</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td style="padding:8px 0;font-weight:bold;">E-mail:</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td style="padding:8px 0;font-weight:bold;">Telefone:</td>
                    <td>${phone}</td>
                </tr>
                </table>

                <div style="margin-top:24px;">
                <p style="font-weight:bold;margin-bottom:8px;">Mensagem:</p>
                <div style="background:#f7f7f7;padding:16px;border-radius:6px;">
                    ${message.replace(/\n/g, "<br>")}
                </div>
                </div>

                <hr style="margin:24px 0;border:none;border-top:1px solid #eee;"/>

                <p style="font-size:12px;color:#888;">
                Esta mensagem foi enviada através do formulário de contato do site.
                </p>

            </div>
            `,
        });

        return new Response(JSON.stringify({ message: "Mensagem enviada com sucesso" }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ message: "Erro ao enviar a mensagem" }), { status: 500 });
    }
}