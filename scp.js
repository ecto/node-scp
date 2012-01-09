/*
 * node-scp
 * <cam@onswipe.com>
 */
var exec = require('child_process').exec;

var scp = module.exports = {};

/*
 * Transfer a file to a remote host
 */
scp.send = function (options, cb) {
  exec ('scp ', function () {
    cb(arguments);
  });
}

/*
 * Grab a file from a remote host
 */
scp.get = function (options, cb) {
  var command = [
    'scp',
    '-r',
    options.host + ':' + options.file,
    options.path
  ];
  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}
