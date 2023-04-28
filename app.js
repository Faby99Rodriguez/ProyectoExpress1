var express = require('express');
var app = express();

appp.get('/', function(req, res){
    res.send('Hola Mundo');
});

app.listen(3000, function(){
    console.log('aplicacion escuchando en puerto: 3000')
});
