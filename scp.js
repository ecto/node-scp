/*
 * node-scp
 * <cam@onswipe.com>
 */
var exec = require('child_process').exec;

var scp = module.exports = {};

function buildSshOptions(options) {
  var result = '';
  var defaults = {
    ControlMaster: 'no'
  };
  var sshOptions = Object.assign({}, defaults, options.sshOptions);
  Object.keys(sshOptions).map(function (key) {
    result += "-o " + key + '=' + sshOptions[key] + ' ';
  });
  return result.trim();
}
/*
 * Transfer a file to a remote host
 */
scp.send = function (options, cb) {
  var command = [
    'scp',
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    buildSshOptions(options),
    options.file,
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.path,
  ];
  exec(command.join(' '), function (err, stdout, stderr) {
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
    'scp',
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    buildSshOptions(options),
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.file,
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
