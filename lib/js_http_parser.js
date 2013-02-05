module.exports = JsHttpParser;
function JsHttpParser(onHeadersComplete, onMessageComplete) {
  this._offset            = 0;
  this._headers           = [];
  this._onHeadersComplete = onHeadersComplete;
  this._onMessageComplete = onMessageComplete;
}

JsHttpParser.prototype.write = function(buffer) {
  var start = 0;
  var colon = 0;
  for (var i = 0; i < buffer.length; i++) {
    var prevByte = byte;
    var byte = buffer[i];

    if (colon === 0 && byte === 0x3a) {
      colon = i - start;
    } else if (prevByte === 0x0d && byte === 0x0a) {
      if (colon) {
        var line = buffer.toString('ascii', start, i - 1);
        this._headers.push(line.substr(0, colon));
        this._headers.push(line.substr(colon+2));
      }

      start = i + 1;
      colon = 0;
    }
  }

  this._onHeadersComplete({headers: this._headers});
  this._onMessageComplete();
};
