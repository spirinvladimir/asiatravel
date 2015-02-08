/*jslint node:true*/
var domready = require('domready'),
    Reveal = require('reveal'),
    createSlides = require('./slides');

domready(function () {
    'use strict';
    var rootDiv = document.getElementsByClassName('slides')[0];
    
    createSlides({parent: rootDiv});
    
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: 'slide'
    });
});
