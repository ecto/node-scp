var scp = require('../');

scp.get({
  file: '~/test',
  host: 'core',
  path: './test/what'
}, function () {
  console.log(arguments);
});
