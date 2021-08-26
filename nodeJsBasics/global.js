//console.log(global);

setTimeout(()=>{
    console.log('timeout is working!');
    clearInterval(int);
},5000);

const int = setInterval(()=>{
    console.log("interval is working")
},2000);

console.log(__dirname);
console.log(__filename);
