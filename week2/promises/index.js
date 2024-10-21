const fs = require('fs');

function ReadPromisefied(){
  return new Promise((resolve, reject)=>{
    fs.readFile("read.txt", "utf8", function(err,contents){
      if(err) reject(err);
      resolve(contents);
      console.log(contents);
    });
  });
}

function WritePromisefied(data){

  return new Promise((resolve, reject)=>{
    fs.writeFile("write.txt", data, (err)=>{
      if(err) reject(err);
      resolve();
      console.log("File written successfully");
    });
  });
}

function ClearfilePromified(){
  return new Promise((resolve, reject)=>{
    fs.writeFile("read.txt","", function(err,contents){
      if(err) reject(err);
      resolve();
      console.log("File cleared successfully");
    })
  })
}

function callback(){
  console.log("File read successfully");
}
ReadPromisefied().then(callback).then(WritePromisefied("Hello world!")).then(ClearfilePromified);