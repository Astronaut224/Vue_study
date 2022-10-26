import thenFs from "then-fs";

// readFile函数返回的是一个 Promise 对象，所以可以调用 then 函数
thenFs.readFile('./1.txt', 'utf-8').then((r1) => {console.log(r1);});
thenFs.readFile('./2.txt', 'utf-8').then((r2) => {console.log(r2);});
thenFs.readFile('./3.txt', 'utf-8').then((r3) => {console.log(r3);});