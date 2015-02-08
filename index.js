var static = require('node-static');
    builder = require('./builder'),
    file = new static.Server('./'),
    http = require('http');


builder(function () {
    http.createServer(function (request, response) {
        request.addListener('end', function () { 
            file.serve(request, response);
        }).resume();
    }).listen(process.env.VCAP_APP_PORT || 8080);
});