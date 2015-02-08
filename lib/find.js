/*jslint node:true*/
module.exports = function (data) {
    'use strict';
    //TODO: add cache
    var l = data.length;
    this.date = function (x) {
        var i;
        x = Date.parse(x);
        for (i = 0; i < l; i += 1) {
            if (x === data[i].date) {
                return data[i];
            }
        }
    };
};
    