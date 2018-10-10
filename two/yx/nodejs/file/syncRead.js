//同步读取文件
var fs=require('fs');
var data=fs.readFileSync('file.txt');
console.log(data)
console.log(data.toString())
