var express = require('express');
var server=require('radsaproizvodima-modul');
var app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(request, response)=>{
    response.send("Server radi");
});

app.listen(port, () => {
    console.log(`startovan server na portu ${port}`)
});