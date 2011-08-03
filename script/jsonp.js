var jsonp = function(url, cb, data) {
  console.log(url);
  var jqXHR = $.get(url, data, function(data) {
    if (cb)
      cb(null, data);
  },
  "jsonp").error(function(err) {
    if (cb)
      cb(err);
  }).complete(function(jqXHR) {
    console.log('complete');
  });
  return jqXHR;
}
