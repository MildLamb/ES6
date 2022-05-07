// 1. 引入fs模块
const fs = require("fs");

// 2. 调用方法读取文件
/*
fs.readFile("../test.md",(err,data)=>{
    // 如果失败抛出异常
    if (err) throw err;
    // 如果没有出错，则输出内容
    console.log(data.toString());
});
*/

// 3. 使用 promise 封装
const p = new Promise(function (resolve,reject) {
    fs.readFile("../test.md",(err,data)=>{
        // 如果失败抛出异常
        if (err) reject(err);
        // 如果成功
        resolve(data);
    });
});

p.then(function (value) {
    console.log(value.toString());
},function (reason) {
    console.log(reason);
});