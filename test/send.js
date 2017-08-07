var scp = require('../');

scp.send({
  file: './test/what',
  host: 'core',
  path: '~',
  ssh_options: {
      StrictHostKeyChecking: 'no',
      UserKnownHostsFile: '/dev/null'
  }
}, function () {
  console.log(arguments);
});
