const express = require('express');
const app = express();

app.use((req,res,next)=>{

    // x-powered-by
    res.removeHeader('X-Powered-By');
    // referrer policy
    res.setHeader('Referrer-Policy','strict-origin');
    // no automatic content -type upgrade
    res.setHeader('X-Content-Type-Options','nosniff');
    //hsts
    res.setHeader('Strict-Transport-Secrity','max-age=31536000; includeSubDomains; preload')
    // csp
    res.setHeader('Content-Security-Policy',"frame-ancestors 'self'" );

    res.cookie('sessionId','5212',{
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    })
    next();
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname, 'server1/index.js')
})

app.get('/ex1',(req,res)=>{
    res.sendFile(__dirname + '/example1.html')
})

app.get('/ex2',(req,res)=>{
    res.sendFile(__dirname + '/example2.html')
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})