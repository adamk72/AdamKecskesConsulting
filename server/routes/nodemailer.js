const express = require('express');
const router = express.Router();
require('dotenv').config()
const nodemailer = require('nodemailer')
const md5 = require('md5')

/* GET users listing. */
router.post('/', function (req, res, next) {
    const { email } = req.body
    sendMail(email)

    function sendMail(email) {
        let md5email = md5(email)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_LOGIN,
                pass: process.env.SMTP_PASSWORD
            },
        });
        // http://localhost:3000/#/files/c8ff581e1ec23af7c5eaeac5b178bb7d/Consulting_Questions.pdf
        const link = `http://localhost:3000/#/files/${md5email}/Consulting_Questions.pdf`
        // send mail with defined transport object
        transporter.sendMail({
            from: '"Adam Kecskes Consulting" <consulting@kecskes.net>', // sender address
            to: `${email}`, // list of receivers
            subject: "Your paper on the best questions for non-coders to ask", // Subject line
            text: `Thanks so much for taking the time to read my paper on those questions non-coders should as of their coders. You may be hiring contractors to do fresh work, or you're a non-technical manager of a technical team. Even if you are technical, this paper will help you focus what you should be asking of any software develop about to join your team. Use this link to download the paper: ${link}`, // plain text body
            html: `<p>Thanks so much for taking the time to read my paper on those questions non-coders should as of their coders. You may be hiring contractors to do fresh work, or you're a non-technical manager of a technical team. Even if you are technical, this paper will help you focus what you should be asking of any software develop about to join your team.</p><br/><a href=${link}>Download</a>`, // html body
        }, (error, info) => {
            if (error) {
                res.status(400).json({ status: '400' })
            } else {
                res.status(200).json({ status: 'OK' })
            }
        });
    }
});


module.exports = router;