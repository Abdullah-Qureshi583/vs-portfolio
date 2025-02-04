"use server";
import nodemailer from "nodemailer";

export const sendMail = async (data) => {
  const { email, message, name, subject } = data;

  const emailHtmlContent = `
    <html>
      <head>
        <style>
          /* General Reset */
          body, h1, h2, p {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          table {
            width: 100%;
            border-spacing: 0;
            border-collapse: collapse;
          }
          /* Styling for the email container */
          .email-container {
            background-color: #f4f7fc;
            padding: 20px;
            max-width: 600px;
            margin: 0 auto;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          }
          /* Header Style */
          .email-header {
            background-color: #2c3e50;
            color: #fff;
            padding: 15px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .email-header h1 {
            font-size: 24px;
            margin-bottom: 10px;
          }
          /* Body Style */
          .email-body {
            background-color: #fff;
            padding: 20px;
            border-radius: 0 0 8px 8px;
          }
          .email-body h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
          }
          .email-body p {
            font-size: 16px;
            color: #666;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          /* Button Style */
          .button {
            background-color:#e8f0ff;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            margin-top: 15px;
          }
         
          .button:hover {
            background-color:   #d8e1fd;
          }
        </style>
      </head>
      <body>
        <div className="email-container">
          <div className="email-header">
            <h1>New Message from ${name}</h1>
          </div>
          <div className="email-body">
            <h2>Message Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <a href="mailto:${email}" className="button">Reply to ${email}</a>
          </div>

        </div>
      </body>
    </html>
  `;

  console.log("Form Data:", data);
  console.log("Gmail ID:", process.env.GMAIL_ID);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_ID, 
      pass: process.env.PASS_KEY, 
    },
  });

  try {
    // Send email with user-provided details
    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.GMAIL_ID,
      subject: `New Contact Form Submission in Portfolio: ${subject}`, 
      html: emailHtmlContent, 
    });

    console.log("Message sent: %s", info.messageId);
    return {
      success: true,
      error: false,
      message: " Message sent successfully! We'll get back to you soon. ",
    };
  } catch (error) {
    console.error("Error sending email:", error); // Log any errors
    return {
      success: false,
      error: true,
      message: " Error sending email. Please try again.",
    };
  }
};
