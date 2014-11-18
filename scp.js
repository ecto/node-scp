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
  var command = baseCommand(options).concat([
    options.file,
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.path
  ]);
  run(command, cb);
}

/*
 * Grab a file from a remote host
 */
scp.get = function (options, cb) {
  var command = baseCommand(options).concat([
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.file,
    options.path
  ]);
  run(command, cb);
}

function run(command, cb) {
  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}

function baseCommand(options) {
  var cmd = [
    'scp',
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    '-o "ControlMaster no"' //callback is not fired if ssh sessions are shared
  ];
  if (options.key) {
    cmd = cmd.concat(['-i', options.key]);
  }
  return cmd;
}
