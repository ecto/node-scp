# node-scp

SCP (secure file copy) wrapper for node.js

![scp](http://i.imgur.com/RrUKV.gif)

##install

    npm install scp

##usage

````javascript
var scp = require('scp');

var options = {
  file: 'dump.sql',
  user: 'username',
  host: 'myServer',
  port: '22',
  path: '~'
}

scp.send(options, function (err) {
  if (err) console.log(err);
  else console.log('File transferred.');
});
````

##methods

###scp.send(options, cb)

Send a file to a remote host (in your `~/.ssh/config`)

You must pass in `options`. A `cb` function is optional, and will be passed `err`, `stdout`, and `stderr`.

There are currently 4 options:

````javascript
scp.send({
  file: './file.txt', // local file to send
  user: 'username',   // username to authenticate as on remote system
  host: 'myServer',   // remote host to copy to, set up in your ~/.ssh/config
  port: '22',         // remote port, optional, defaults to '22'
  path: '~'           // remote path to save to (this would result in a ~/file.txt on myServer)
});
````

###scp.get(options, cb)

Transfer a file from a remote host (in your `~/.ssh/config`) to the current computer.

You must pass in `options`. A `cb` function is optional, and will be passed `err`, `stdout`, and `stderr`.

There are currently 3 options:

````javascript
scp.get({
  file: '~/file.txt', // remote file to grab
  user: 'username',   // username to authenticate as on remote system
  host: 'myServer',   // remote host to transfer from, set up in your ~/.ssh/config
  port: '22',         // remote port, optional, defaults to '22'
  path: '~'           // local path to save to (this would result in a ~/file.txt on the local machine)
});
````

## license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
