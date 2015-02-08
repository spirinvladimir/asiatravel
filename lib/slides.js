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
            title: 'Asia Travels'
        }),
        new Slide({
            childs: [
                new Slide({
                    title: 'Bali',
                    img: f.date('2014-12-10').img[0]
                }),
                new Slide({
                    img: f.date('2014-12-10').img[0],
                    title: '2014-12-10',
                    text: f.date('2014-12-10').text[0]
                }),
                new Slide({
                    img: f.date('2014-12-10').img[1],
                    text: f.date('2014-12-10').text[1]
                    
                }),
                new Slide({
                    img: f.date('2014-12-10').img[1],
                    text: f.date('2014-12-10').text[2]
                }),
                new Slide({
                    img: f.date('2014-12-11').img[0],
                    title: '2014-12-11',
                    text: f.date('2014-12-11').text[0]
                }),
                new Slide({
                    img: f.date('2014-12-11').img[1],
                    text: f.date('2014-12-11').text[1]
                })
            ]
        }),
        new Slide({
            childs: [
                new Slide({
                    title: 'Thiland',
                    img: 'https://img-fotki.yandex.ru/get/7/19948730.6/0_c1e8e_37fd5ac3_orig.jpg'
                }),
                new Slide({
                    img: f.date('2015-01-18').img[0],
                    title: '2015-01-18',
                    text: f.date('2015-01-18').text[0]
                }),
                new Slide({
                    img: f.date('2015-01-18').img[0],
                    text: f.date('2015-01-18').text[1]
                }),
                new Slide({
                    img: f.date('2015-01-18').img[0],
                    text: f.date('2015-01-18').text[2]
                }),
                new Slide({
                    img: f.date('2015-01-18').img[0],
                    text: f.date('2015-01-18').text[3]
                }),
                new Slide({
                    img: f.date('2015-01-18').img[0],
                    text: f.date('2015-01-18').text[4]
                }),
                new Slide({
                    img: f.date('2015-01-19').img[0],
                    title: '2015-01-19',
                    text: f.date('2015-01-19').text[0]
                }),
                new Slide({
                    img: f.date('2015-01-19').img[0],
                    text: f.date('2015-01-19').text[1]
                }),
                new Slide({
                    img: f.date('2015-01-19').img[1],
                    text: f.date('2015-01-19').text[1]
                })
            ]
        })
    ].forEach(function (slide) {
        parent.appendChild(slide.el);
    });
};
    