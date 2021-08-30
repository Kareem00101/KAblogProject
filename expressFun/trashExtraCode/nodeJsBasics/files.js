const fs = require('fs')

// to read
fs.readFile('./docs/blogOne.txt',(err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// to write
fs.writeFile('./docs/blogOne.txt', 'hello world', ()=>{
    console.log('file was written');
});

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
} else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted')
    })
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}
