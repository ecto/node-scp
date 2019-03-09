var scp = require('../');

scp.get({
  file: '~/test',
  host: 'core',
  path: './test/what',
  sshOptions:  {
    StrictHostKeyChecking: 'no'
  }
}, function () {
  console.log(arguments);
});
