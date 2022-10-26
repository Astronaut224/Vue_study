import fs from 'fs'

// 1. 方法名为getFile
// 2. 参数fpath，表示要读取文件的路径
function getFile(fpath) {
    // 3. 返回一个Promise实例对象
    return new Promise(function(resolve, reject) {
        // 4. 向构造函数中传入一个function，里面执行具体的异步操作
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            // 读取失败，返回值返回到reject回调函数
            if(err) return reject(err);
            // 读取成功，返回值返回到resolve回调函数
            resolve(dataStr);
        })
    })
}

// 返回值是一个Promise实例对象，调用then函数的两个回调（成功的回调函数,失败的回调函数）
getFile('./1.txt').then((res) => {console.log(res);}, (err) => {console.log(err.message);});