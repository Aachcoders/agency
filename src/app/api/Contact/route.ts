import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Named export for the POST method
export async function POST(req: NextRequest) {
  const { name, email, phone, budget, message } = await req.json();

  // Create a transporter object using Mailtrap SMTP
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "61a74e09361aedf64ff0bdf95facbd99"
    }
  });

  // Set up email data
  const mailOptions = {
    from: 'info@demomailtrap.com',
    to: 'aachcoder47@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBudget: ${budget}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}

// Optionally, you can export other HTTP methods if needed
export async function OPTIONS() {
  return NextResponse.json({ message: 'Allowed methods: POST' }, { status: 200 });
}