var scp = require('../');

scp.send({
  file: './test/what',
  host: 'core',
  path: '~'
}, function () {
  console.log(arguments);
});
