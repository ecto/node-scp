/*
 * node-scp
 * <cam@onswipe.com>
 */
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

var scp = module.exports = {};

/*
 * Transfer a file to a remote host
 */
scp.send = function (options, cb) {
  var args = [
    'scp',
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    options.file,
    (options.user == undefined 
      ? '' 
      : (options.user + '@') + 
      (options.host == undefined ? '' : options.host + ':') + 
      options.path)
  ];
  console.log(command)
  var proc = spawn('scp', args);
  proc.on('close', function (code) {
    if(code != 0) {
      cb(new Error("scp exited with code " + code));
    }
    else {
      cb();
    }
  })

  var buffer = "";
  proc.stdout.on('data', function (data) {
    buffer += data.toString();
    if(buffer.charAt(buffer.length - 1) == ':') {
      proc.stdin.write(options.password + '\n');
      console.log("Supplying password...");
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
    (options.user == undefined 
      ? '' 
      : (options.user + '@')) + 
      (options.host == undefined ? '' : options.host + ':') + options.file,
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
