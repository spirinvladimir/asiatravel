/*jslint node:true*/
module.exports = function (opts) {
    'use strict';
    var img = opts.img,
        title = opts.title,
        text = opts.text,
        childs = opts.childs,
        titleEl,
        textEl;
    this.el = document.createElement('section');
    if (img) {
        this.el.setAttribute('data-background', img);
    }
    if (title) {
        titleEl = document.createElement('b');
        titleEl.appendChild(document.createTextNode(title));
        this.el.appendChild(titleEl);
    }
    if (text) {
        textEl = document.createElement('p');
        textEl.classList.add('fon');
        textEl.appendChild(document.createTextNode(text));
        this.el.appendChild(textEl);
    }
    if (childs) {
        childs.forEach(function (child) {
            this.el.appendChild(child.el);
        }, this);
    }
};
    