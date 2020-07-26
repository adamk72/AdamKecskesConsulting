const express = require('express');
const router = express.Router();
var mime = require('mime');

/* GET home page. */
router.get('/', function (req, res, next) {
    const file = `public/files/${req.query.file}`;
    res.setHeader('Content-disposition', 'attachment; filename=' + req.query.file);
    res.setHeader("Content-Type", mime.lookup(file));
    res.download(file, (error) => {
        if (error) {
            if (res.headersSent) {
                console.log("Headers sent")
            } else {
                console.log("error: ", error.statusCode)
            }
        }
    });
});

module.exports = router;
