const sendMail=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        console.log(username,email,password);

const nodemailer = require('nodemailer'); // Ensure nodemailer is imported
let config = {
    service: "gmail",
    auth: {
      user: process.env.ALERT_EMAIL,
      pass: process.env.ALERT_PASSWORD,
    },
  };
  let transporter = nodemailer.createTransport(config);
let content = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">Your Account Details</h2>
        <p>Dear ${username},</p>
        <p>We are sharing your account details as requested:</p>
        <ul style="list-style-type: none; padding: 0;">
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Password:</strong> ${password}</li>
        </ul>
        <p>If you have any questions, feel free to contact our support team.</p>
        <p>Best regards,</p>
        <p><strong>Second Brain</strong></p>
    </div>`;

  let message = {
    from: process.env.ALERT_EMAIL, // Sender address
    to: email, 
    subject: "Your Email and Password",
    html:  content  // Use backticks for HTML content
   
  };
 console.log("Sending email to:", email);
  transporter
    .sendMail(message)
    .then(() => {
        console.log("Email sent successfully to:", email);
      return res.status(200).json({
        msg: "OTP sent to your email successfully!",
        email: email, 
        success: true,
      });
      
    })
    // console.log("Email sent successfully to:", email);
    .catch((error) => {
      return res.status(500).json({ error });
    });
  } catch (error) {
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
};
module.exports=sendMail;