import thenFs from 'then-fs'

// 数组中存放读取文件的异步操作
const promiseArr = [
    thenFs.readFile('./1.txt', 'utf-8'),
    thenFs.readFile('./3.txt', 'utf-8'),
    thenFs.readFile('./2.txt', 'utf-8'),
]

// 打印结果是 [ '111', '333', '222' ]
Promise.all(promiseArr).then(result => {
    console.log(result);
})

Promise.race(promiseArr).then(result => {
    console.log(result);
})