var benchmark = require('./lib/benchmark');
var Parser    = process.binding('http_parser').HTTPParser;
var fs        = require('fs');
var fixture   = fs.readFileSync(__dirname + '/fixtures/get.http');

var parser = new Parser();
var runs   = 100000;

benchmark('node-http', function(cb) {
  var iterations = 0;
  for (var i = 0; i < runs; i++) {
    var headers;
    parser.onHeadersComplete = function(info) {
      console.log(info);
      headers = info.headers.length;
    };

    parser.onMessageComplete = function() {
      iterations++;
    };

    var ret = parser.execute(fixture, 0, fixture.length);
  }

  cb(null, {bytes: fixture.length, headers: headers, iterations: iterations});
});
