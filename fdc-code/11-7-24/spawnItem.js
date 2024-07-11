var { spawn } = require('child_process');
async function SpawnItem(cmd, args, opt = {}, cb) {
    // let process = await spawn(cmd, args, opt);
    try {
        var data = function (dt) { console.log('1 data received as: ', dt.toString()); }
        var exit = function (code) { console.log(`2 data packed break code ${code}`); }
        var close = function (code) {
            console.log(`3 child process close all stdio with code ${code}`);
            cb({pid: p.pid, status: true}); }
        let error = function(e) { console.log(e); cb({pid: p.pid, status: false}); }
        let p = await spawn('dir', [], { shell: true });
        console.log('pid => ', p.pid); cb({ status: 'pid', pid: p });
        p.stdout.on('data', data);
        p.on('exit', exit)
        p.on('close', close)
        p.on('error', error)
    } catch (e) {
        debugger;
        console.log(e)
    }
}
module.exports = SpawnItem