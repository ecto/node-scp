var scp = require('../');

scp.send(
    {
        file      : './what',
        host      : 'uspro603.server4you.net', 
        user      : 'alpha', 
        // host      : 'core', 
        recursive : false,
        path      : '~',
        ssh_options :
        {
            ControlMaster : 'no',
            StrictHostKeyChecking : 'no'
        }
    },
    function ()
    {
        console.log(arguments);
    }
);
