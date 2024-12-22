const express = require('express');
const app =express();

app.get('/sse', (req,res)=>{
    res.setHeader('Connection','keep-alive');
    res.setHeader('Content-type','text/event-stream');
    res.setHeader('Cache-control','no-cache');

    res.write('data: sse-infiniko\n\n');

    const intervalId = setInterval(()=>{
        res.write(`data: infiniko at ${new Date().toLocaleTimeString()}\n\n`);
    },5000);

    req.on('close', ()=>{
        clearInterval(intervalId);
    })
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname+ '/index.html');
})


const port = 5011;
app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})