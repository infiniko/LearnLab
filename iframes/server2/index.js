const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname, 'server2/index.js')
})

app.get('/if1',(req,res)=>{
    res.sendFile(__dirname + '/iframe1.html')
})

app.get('/if2',(req,res)=>{
    res.sendFile(__dirname + '/iframe2.html')
})

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})