require('dotenv').config()
const nodeMailer = require('nodemailer')

const sendMail = (req, res) => {
    // res.send('I wanna send mail')
    const transporter = nodeMailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: 'Yourself 👋"<ajiboyecaroline95@gmail.com>"',
        to: 'carolineajiboye12@gmail.com',
        subject: 'Testing Node Mailer',
        // text : 'My name is Ajiboye Caroline , ghVAXBUJHWHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHGTYHGWYJHFABYUJHWASBIWAJKSHWASUIJHWASUIHJWASUJHWSABUA👋👋👋👋👋👋🤗🤗🤗🤗🤗🤗🤗❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🥵🥵🥵🥵🥵🥵🥵🥵🥶🥶🥶🥶🥶🥶🥶😂😂😂😂😂😂😂😂(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)👅👅👅👅👅🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣',
        html: `
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Welcome Email</title>
    </head>
    <body style="background-color:#f5f8fa; margin:0; padding:10; font-family:Arial, sans-serif;">

        <div style="max-width:600px; margin:40px auto; background-color:#ffffff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.05); padding:0; overflow:hidden;">
        
        <!-- Header -->
        <div style="background-color:#4a90e2; color:#ffffff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:24px;">Welcome to Our Platform!</h1>
        </div>

        <!-- Content -->
        <div style="padding:20px; color:#333333;">
            <h2 style="color:#4a90e2; font-size:20px; margin-top:0;">Hi Caroline,</h2>
            <p style="font-size:16px; line-height:1.6;">Thanks for signing up! We're excited to have you onboard. Here are the details you provided:</p>
            
            <div style="background-color:#f0f4f8; padding:15px; border-radius:5px; margin-top:15px;">
            <p style="margin:5px 0;"><strong>Name:</strong> Caroline</p>
            <p style="margin:5px 0;"><strong>Email:</strong> caroline@example.com</p>
            <p style="margin:5px 0;"><strong>Username:</strong> caro_dev</p>
            </div>

            <p style="font-size:14px; color:#555555; margin-top:20px;">If this wasn't you, please contact our support immediately.</p>
        </div>

        <!-- Footer -->
        <div style="text-align:center; color:#999999; font-size:13px; padding:20px;">
            &copy; 2025 dev_caroline. All rights reserved.
        </div>

        </div>

    </body>
    </html>
`
    }

    transporter.sendMail(mailOptions)
        .then((result) => {
            res.status(201).json({ message: 'Success', result })
        })
        .catch((err) => {
            console.log(err);

        })
}


module.exports = sendMail