/*jslint node:true*/
module.exports = function (done) {
    var fs = require('fs'),
        browserify = require("browserify"),
        b = browserify("./lib/main.js"),
        
        hbsfy = require("hbsfy").configure({
            extensions: ["hbs"]
        });
    b.transform(hbsfy);
    b.on('bundle', done);
    b.bundle().pipe(fs.createWriteStream("./bundle.js"));
};
