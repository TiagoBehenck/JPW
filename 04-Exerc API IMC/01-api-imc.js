var express = require("express");
var app = express();

app.get('/api/imc/:peso/:altura', (req, res) => {
    res.send({IMC: req.params.peso / (req.params.altura * req.params.altura)});
});

app.listen(3000,
    function(){
        console.log("Servidor iniciado com ExpressJS");
    }
);