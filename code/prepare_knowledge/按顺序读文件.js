import thenFs from 'then-fs';

thenFs.readFile('./111.txt', 'utf-8')
// 找不到111.txt，报错后面的then函数都不会执行了
.catch((err) => {
    console.log(err.message);
})
.then((r1) => {
    console.log(r1);
    // 返回值是一个 Promise 对象，可以继续用 then() 方法处理
    return thenFs.readFile('./2.txt', 'utf-8');
})
// 继续调用 then() 方法为上一个 then() 的返回值（新的 Promise 实例对象）指定成功后的回调函数
.then((r2) => {
    console.log(r2);
    return thenFs.readFile('./3.txt', 'utf-8');
})
.then((r3) => {
    console.log(r3);
})
