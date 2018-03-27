const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const route = require('./route/route');

var app = express();

const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/shopping");
mongoose.connection.on('connected', ()=> {
    console.log('MongoDB connected at Port: 27017');
});
mongoose.connection.on('error', (err)=> {
    console.log(err);
});

app.use(cors());
app.use(bodyParser.json());

app.use('/', route);

app.listen(PORT, () => {
    console.log('Server has started on port: ', PORT);
})