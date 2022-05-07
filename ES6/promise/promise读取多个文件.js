// 使用nodejs实现
// 引入fs模块
const fs = require("fs");

/*
fs.readFile("../Test_Resource/test.md",(err,data)=>{
    fs.readFile("../Test_Resource/test2.md",(err,data2)=>{
        fs.readFile("../Test_Resource/test3.md",(err,data3)=>{
            let result = data + "\r\n" + data2 + "\r\n" + data3;
            console.log(result);
        });
    });
});
*/


// 使用promise实现
const p = new Promise((resolve,reject) => {
    fs.readFile("../Test_Resource/test.md",(err,data) => {
        resolve(data)
    });
});

p.then(value => {   // 这里的value是test1中的内容
    return new Promise((resolve,reject) => {
        fs.readFile("../Test_Resource/test2.md",(err,data) => {  // 这里的data是test2中的内容
            resolve([value,data]);
        })
    })
}).then(value => {
    return new Promise((resolve,reject) => {
        fs.readFile("../Test_Resource/test3.md",(err,data)=>{
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
});