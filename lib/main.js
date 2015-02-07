/*jslint node:true*/
var domready = require('domready'),
    Reveal = require('reveal'),
    templateReveal = require('./reveal'),
    slides = require('./slides');

domready(function () {
    'use strict';
    document.body.innerHTML = templateReveal(slides);
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: 'slide'
    });
});
