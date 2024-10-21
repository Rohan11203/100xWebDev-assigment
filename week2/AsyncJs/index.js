const fs = require("fs");

fs.readFile("abc.txt", "utf-8",function(err, data) {
  console.log(data);  
})

fs.readFile("abc.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.writeFile("ab.txt", "Hello, world!",err=>{console.log(err);});