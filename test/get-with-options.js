var scp = require('../');

scp.get(
    {
        file      : '~/what',
        host      : 'uspro603.server4you.net', 
        user      : 'alpha', 
        recursive : false,
        path      : '.',
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
