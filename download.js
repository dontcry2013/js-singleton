// var download = (function(){
// 	var taskList = [];
// 	return function(mTask){
// 		var tid = mTask.tid;
// 		var _tid = taskList.map(function(itm){
// 			return itm.tid;
// 		})
// 		if(_tid.indexOf(tid) == -1){
// 			console.log(tid, "starting");
// 			var idx = taskList.push(mTask);
// 			setTimeout(function(task, index){
// 				//TODO something download

// 	    		delete taskList[index];
// 	    		console.log("finish", task, index, taskList);
// 	    	}, 1000, mTask, idx-1)
// 		} else{
// 			console.log(tid, "has started");
// 		}
    	
//     }
    
// }());

// download({tid:1, url:'http://www.baiud.com'})
// download({tid:2, url:'http://www.google.com'})


var download = (function(){
	var taskList = [];
	var get = function(){
		return taskList;
	}
	var push = function(task){
		return taskList.push(task)
	}
	var ins = {}
	ins.get = get;
	ins.push = push;

	return ins;
}());

module.exports = download;
