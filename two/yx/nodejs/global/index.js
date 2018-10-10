// __filename当前文件的全局路径
console.log(__filename);

//__dirname当前文件的全局目录
console.log(__dirname);

// ssetTimeout(cb,ms)
setTimeout(() => {
    console.log('hello setTimeout');
}, 1000);

//clearTimeout