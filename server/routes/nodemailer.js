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
        // send mail with defined transport object
        transporter.sendMail({
            from: '"Adam Kecskes Consulting" <consulting@kecskes.net>', // sender address
            to: `${email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: `<b>Hello world?</b><br/><a href='http://localhost:3000/files?_id=${md5email}&_file='Consulting_Questions.pdf'>Download</a>`, // html body
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