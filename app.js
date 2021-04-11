//console.log("Hello");
//console.log(module);

//const logger=require("./logger.js");
//console.log(logger);
//logger.log("aditya");


// learning path module

/*
const path=require("path");

var pathObj=path.parse(__filename);
console.log(pathObj); */

// learning OS module

/*const os=require("os");

var freeMemory=os.freemem();
var TotalMemory=os.totalmem();
console.log("Your freee memory is  "+freeMemory);
console.log("Your Total memory is  "+TotalMemory); */

//filesystem module

const fs=require("fs");

//synchronous
//const files=fs.readdirSync("./");
//console.log(files);

//asynchronous 
/*
fs.readdir("./", function(err,files){
    if(err)
    console.log("error",err);
    else
    console.log("result",files);
});*/

// Event Module
/*

const EventEmitter=require("events");
const emitter=new EventEmitter();

           // listener

emitter.on("messageLogged", function(){
    console.log("listener called");
});

      // raising an event
emitter.emit("messageLogged");     */

// http


const http=require("http");

const server=http.createServer();

server.on("connections", function(socket){
    console.log("new connection");
})
server.listen(3000);
console.log("listening on port 3000...");