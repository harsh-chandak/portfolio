import nodemailer from 'nodemailer';
console.log({
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
})
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `New message from ${name}`,
      html: `
            <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: auto; background: #0f172a; padding: 24px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); color: #f8fafc; line-height: 1.6;">
              <h2 style="margin-bottom: 12px; font-size: 24px; color: #38bdf8; border-bottom: 2px solid #38bdf8; padding-bottom: 8px;">
                🚀 New Contact Form Submission From Portfolio
              </h2>
              
              <p style="margin: 16px 0;">
                <strong style="color: #facc15;">Name:</strong><br/>
                <span style="font-size: 16px;">${name}</span>
              </p>
              
              <p style="margin: 16px 0;">
                <strong style="color: #facc15;">Email:</strong><br/>
                <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
              </p>
              
              <p style="margin: 16px 0;">
                <strong style="color: #facc15;">Message:</strong><br/>
                <div style="margin-top: 8px; padding: 12px; background: #1e293b; border-left: 4px solid #38bdf8; border-radius: 6px;">
                  ${message.replace(/\n/g, "<br/>")}
                </div>
              </p>
              
              <p style="margin-top: 32px; font-size: 14px; color: #94a3b8;">
                This message was sent from your portfolio site’s contact form. ✨
              </p>
            </div>
          `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
}