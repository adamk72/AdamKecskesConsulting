const express = require('express');
const router = express.Router();
var path = require('path');
var mime = require('mime');

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.query)
    const file = `public/files/${req.query.file}`;
    console.log(file)
    res.setHeader('Content-disposition', 'attachment; filename=' + req.query.file);
    res.setHeader("Content-Type", mime.lookup(file));
    res.download(file, (error) => {
        if (error) {
            if (res.headersSent) {
                console.log("Headers sent")
            } else {
                console.log("error: ", error)
            }
        }
    });
});

module.exports = router;
