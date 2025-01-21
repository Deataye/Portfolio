import { NextResponse } from "next/server";
import { Resend } from "resend";
import ReactDOMServer from 'react-dom/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  // Convert JSX to HTML string
  const htmlMessage = ReactDOMServer.renderToStaticMarkup(
    <>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </>
  );

  try {
    const data = await resend.emails.send({
      from: fromEmail,  // Use the environment variable for the sender
      to: [email], // Sending the email to the provided recipient
      subject: subject,
      html: htmlMessage,  // Pass HTML content instead of JSX
    });

    return NextResponse.json(data);  // Return the response
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });  // Return error message in response
  }
}
