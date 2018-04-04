
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


var app = express();




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = (closure) => {
  return MongoClient.connect('mongodb://127.0.0.1:27017/learndb', (err, client) => {
    if (err) return console.log(err);
    let db = client.db('learndb');
    closure(db);
  })
}
app.get('/API/Courses/:id', (req, res) => {
  let qry = { _id: ObjectID(req.params.id) };
  connection(db => {
    db.collection('Courses').findOne(qry).then(result => {
      res.send(result)
    })
  })
})
app.get('/API/Courses/:id/comments', (req, res) => {
  let qry = { _id: ObjectID(req.params.id) };
  connection(db => {
    db.collection('Courses').findOne(qry).then(result => {

      response = result.comments;
      res.send(response)
    })
  })
})
app.post('/API/Courses', (req, res) => {
  let qry = { _id: ObjectID(req.params.id) };
  let myobj = {_id: "1 ",titile: "installMongo",content: "how to install Mongodb", category: "MOngoDb",level: "easy",date: "01/04/2018 1:02",author: "chehir",rate: "3.5",likes: " 29"
  }
  connection(db => {
    db.collection('Courses').insertOne(myobj, (err, result) => {
      if (err) throw err;
      console.log("1 document inserted");
      res.send(result);
    })
  })
})
app.put('/API/Courses/:id/comments', (req, res) => {
  let qry = { _id: ObjectID(req.params.id) };
  var newcomments = {$addToSet:{comments :req.body}};
  connection(db => {
    db.collection('Courses').updateOne(qry,newcomments, (err, result) => {
      if (err) throw err;
      console.log(" comments inserted");
      res.send(result);
      
    })
  })
})


app.listen(3000)



