/*jslint node:true*/
var data = require('./data'),
    Find = require('./find'),
    Slide = require('./slide'),
    f = new Find(data);

module.exports = function (opts) {
    'use strict';
    var parent = opts.parent;
    [
        new Slide({
            text: 'Asia Travels'
        }),
        new Slide({
            childs: [
                new Slide({
                    text: 'Bali'
                    img: d[0]
                }),
                new Slide(),
                new Slide(),
                new Slide(),
                new Slide(),
                new Slide(),
                new Slide()
            ]
        }),
        new Slide({
            childs: [
                new Slide({
                    text: 'Thiland'
                }),
                new Slide(),
                new Slide(),
                new Slide(),
                new Slide(),
                new Slide(),
                new Slide()
            ]
        })
    ].forEach(function (slide) {
        parent.appendChild(slide);
    });
};
    