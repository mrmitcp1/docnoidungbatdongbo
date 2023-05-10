const fs = require ('fs')
console.log('start');
fs.readFile('text.txt','utf-8',function (err , data) {
    console.log(data)
});
console.log('end')