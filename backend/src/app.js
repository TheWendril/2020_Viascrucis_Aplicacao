const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// App
const app = express();

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", 'GET,PUT, POST, DELETE');
    app.use(cors());
    next();
});*/

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});



// Load models
const Stories = require('./models/stories');

// Load models
const Gallery = require('./models/gallery');


// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const storiesRoutes = require('./routes/stories-routes');
app.use('/stories', storiesRoutes);

const galleryRoutes = require('./routes/gallery-routes');
app.use('/gallery', galleryRoutes);

const contactRoutes = require('./routes/contact-routes');
app.use('/contact', contactRoutes);


module.exports = app;
