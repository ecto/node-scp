/*
 * node-scp
 * <cam@onswipe.com>
 */
var execFile = require('child_process').execFile;

var scp = module.exports = {};

/*
 * Transfer a file to a remote host
 */
scp.send = function (options, cb) {
  var command = [
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    '-o',
    'ControlMaster no', //callback is not fired if ssh sessions are shared
    options.file,
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.path,
  ];
  execFile('scp', command, function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}

/*
 * Grab a file from a remote host
 */
scp.get = function (options, cb) {
  var command = [
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    '-o',
    'ControlMaster no', //callback is not fired if ssh sessions are shared
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.file,
    options.path
  ];
  execFile('scp', command, function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}
