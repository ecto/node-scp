var scp = require('../');

scp.get({
  file: '~/test',
  host: 'core',
  path: './test/what',
  ssh_options:  {
    StrictHostKeyChecking: 'no'
  }
}, function () {
  console.log(arguments);
});
