let fs = require('fs');
fs.open('file.txt', 'r+', (err, fd) => {
    if (err) {
        console.error(err);
    }
    console.log('打开文件成功')
})