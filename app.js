

//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UsersRoute');
const bodyParser = require('body-parser');


//variable default
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;


//Intantiate app
const app = express();


// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use routes
app.use('/users', userRoutes);


//connect mongodb and listen port
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {
    app.listen(PORT, () => {
        console.log('Listening on port ' + PORT);
    })
})
.catch(err => console.log(err));
