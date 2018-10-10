var events=require('events');

var eventEmitter = new events.EventEmitter();

//绑定自定义connect事件
eventEmitter.on('connect',connectHandler);
//绑定自定义dataReceived事件
eventEmitter.on('dataReceived',receiveHandler);

//定义connectHandler处理函数
function connectHandler(name,password){
	console.log('连接成功...');
	console.log(name,password)
	//触发dataReceived事件
	eventEmitter.emit('dataReceived',{
		result:'success'
	});
}

//定义receiveHandler处理函数
function receiveHandler(resp){
	console.log(resp)
	console.log('数据接收成功!!!');
}


//入口，触发connect事件
eventEmitter.emit('connect','lzw','123456');
console.log('触发connect完成！')
