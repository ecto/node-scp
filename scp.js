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
  var command = ['scp'];

  if (options.ssh_options) {
    Object.keys(options.ssh_options).forEach(
      function(opt_name) {
        command.push("-o " + opt_name + "=" + options.ssh_options[opt_name]);
      }
    );
  }

  if ( !options.hasOwnProperty('recursive') || options.recursive )
    command.push("-r");

  command.push(
    '-P', (options.port ? options.port : '22'),
    options.file,
    (options.user ? options.user + '@' : '') + options.host + ":" + options.path);

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

  var command = ['scp'];
   
  if (options.ssh_options) {
    Object.keys(options.ssh_options).forEach(
      function(opt_name) {
        command.push("-o " + opt_name + "=" + options.ssh_options[opt_name]);
      }
    );
  }
   
  if ( !options.hasOwnProperty('recursive') || options.recursive )
    command.push("-r");

  command.push(
    '-P', (options.port ? options.port : '22'),
    (options.user ? options.user + '@' : '') + options.host + ":" + options.file,
    options.path);

  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}
