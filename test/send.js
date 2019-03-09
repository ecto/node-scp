var scp = require('../');

scp.send({
  file: './test/what',
  host: 'core',
  path: '~',
  sshOptions: {
    StrictHostKeyChecking: 'no',
    UserKnownHostsFile: '/dev/null'
  }
}, function () {
  console.log(arguments);
});
