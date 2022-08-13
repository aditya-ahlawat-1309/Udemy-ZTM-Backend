const {isMainThread, workerData, Worker} = require('worker_threads');

if(isMainThread){
    console.log(`Main Thread! ProcessId : ${process.pid}`);
    new Worker(__filename,{
        workerData: [7,6,2,3] 
    });
    new Worker(__filename,{
        workerData: [1,2,3,4,9,6,7]
    });
}
else{
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}