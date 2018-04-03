
const express = require('express');
const bodyParser = require('body-parser');
var app = express();


 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', function (req, res) {
    res.send('plz ....')

    console.log(req.body);
  })
  app.post('/', function (req, res) {
    if(req.body.pass === '123'){
        res.send({message: 'welcome'+ req.body.login})
    }
    else { res.send({message: 'false'})

    }

   
        
    console.log(req.body);
  })
app.listen(3000)



