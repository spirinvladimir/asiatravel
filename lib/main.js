/*jslint node:true*/
var domready = require('domready'),
    Reveal = require('reveal'),
    createSlides = require('./slides'),
    plz = require('please-ajax')(window);

domready(function () {
    'use strict';
    plz.get('http://reqr.es/api/users', {promise: true}).then(function (data) {
        createSlides(data);
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,
            transition: 'slide'
        });
    });
});
