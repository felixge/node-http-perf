var benchmark    = require('./lib/benchmark');
var JsHttpParser = require('./lib/js_http_parser');
var fs           = require('fs');
var fixture      = fs.readFileSync(__dirname + '/fixtures/get.http');

var runs   = 100000;

benchmark('js-http', function(cb) {
  var iterations = 0;

  var headers;
  function onHeadersComplete(info) {
    headers = info.headers.length;
  }

  function onMessageComplete() {
    iterations++;
  }

  for (var i = 0; i < runs; i++) {
    var parser = new JsHttpParser(onHeadersComplete, onMessageComplete);

    parser.write(fixture);
  }

  cb(null, {bytes: fixture.length, headers: headers, iterations: iterations});
});
