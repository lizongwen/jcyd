module.exports = {
    say: (getName) => {
        getName();
        console.log('mod模块调用成功');
    }
}