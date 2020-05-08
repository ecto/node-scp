var scp = require('../');

scp.get({
  file: '~/what',
  host: 'core',
  path: './test/what'
}, function () {
  console.log(arguments);
});
