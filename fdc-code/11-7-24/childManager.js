var SpawnItem = require("./spawnItem");
let waitingTaskList = []
let masterProcessList = []
let errorList = []
const processCountLimit = 10
async function push(url, fn="") {
    if (Object.keys(masterProcessList).length < processCountLimit) {
        let processNext = function() {
            let fileCurrentlyInProgress = Object.keys(masterProcessList).length;
            console.log('fileCurrentlyInProgress => ', fileCurrentlyInProgress)
            if(waitingTaskList.length > 0 && fileCurrentlyInProgress < processCountLimit) {
                url = waitingTaskList[0]
                waitingTaskList.splice(0, 1)
                push(url)            
            }
        }
        let newP = SpawnItem('echo', ['hello'], {}, (res) => {
            console.log('triggered cb -> res = ')
            if(res.status == true) { let delKey = res.pid;
                delete masterProcessList[delKey]
                processNext()
            } else if(res.status == false) {  let delKey = res.pid;
                delete masterProcessList[delKey]
                errorList.push(res)
                processNext()
            } else if(typeof(res.pid.pid) === 'number') { let newKey = res.pid.pid;
                masterProcessList[newKey] = res.pid;
                console.log('processId = ', res.pid.pid)
                processNext()
            }
        })
    } else {
        waitingTaskList.push(url)
    }
}
module.exports = { push }