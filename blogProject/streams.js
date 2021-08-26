const myFileSystem = require('fs');

//read
const readStream = myFileSystem.createReadStream('./docs/blog3.txt',{
    encoding: 'utf8'
});
//write
const writeStream = myFileSystem.createWriteStream('./docs/blog4.txt');

readStream.on('data',(bunch)=>{
    console.log('A BUNCH OF TEXT IS COMING');
    //console.log(bunch);
    writeStream.write('\n NEW BUCK\n');
    writeStream.write(bunch);
});

// you can also do
//readStream.pipe(writeStream);