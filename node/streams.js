const {createReadStream} = require('fs',{
    highWaterMark: 90000,
    encoding: 'utf8'
});

const stream = createReadStream('./big.txt');
  stream.on('data', (result)=>{
    console.log(result);
});
stream.on('error', (err)=>{ 
    console.log(err);
});