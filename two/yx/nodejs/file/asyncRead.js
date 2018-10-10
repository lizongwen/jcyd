//异步读取文件
let fs=require('fs');
fs.readFile('file.txt',(err,data)=>{
	if(err){
		return console.log(err);
	}
	console.log('内容展示开始');
	console.log(data)
	console.log(data.toString())
});
console.log('读取文件结束')
