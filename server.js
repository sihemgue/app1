const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const courses = require('./server/routing/courses')


app.use('/courses',courses);
