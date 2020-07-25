const express = require('express');
const router = express.Router();
require('dotenv').config()
const nodemailer = require('nodemailer')

/* GET users listing. */
router.post('/', function (req, res, next) {
    // console.log(res.headersSent, req.body)
    const { email } = req.body
    sendMail(email)

    // async..await is not allowed in global scope, must use a 
    function sendMail(email) {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_LOGIN,
                pass: process.env.SMTP_PASSWORD
            },
        });
        // send mail with defined transport object
        transporter.sendMail({
            from: '"Adam Kecskes Consulting" <consulting@kecskes.net>', // sender address
            to: `${email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }, (error, info) => {
            if (error) {
                console.log("ERROR:", error);
                res.status(400).json({ status: '400' })
            } else {
                console.log('Message sent: %s', info.messageId);
                res.status(200).json({ status: 'OK' })
            }
        });
    }
});


module.exports = router;