const express = require('express');
const router = express.Router();
require('dotenv').config()
const nodemailer = require('nodemailer')

/* GET users listing. */
router.post('/', function (req, res, next) {
    // console.log(res.headersSent, req.body)
    const { email } = req.body
    try {
        main(email)
        res.status(200).json({ status: 'OK' })
    } catch (error) {
        console.error(error.statusCode)
    }


});


// async..await is not allowed in global scope, must use a wrapper
async function main(email) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_LOGIN,
            pass: process.env.SMTP_PASSWORD
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Adam Kecskes Consulting" <consulting@kecskes.net>', // sender address
        to: `${email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


module.exports = router;