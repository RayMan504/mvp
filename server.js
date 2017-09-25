const express = require('express');
const morgan = require('morgan'); // log requests to the console (express4)
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;


const app = express();

// set the port of our application
// process.env.PORT consts the port be set by Heroku
const port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(`${__dirname}/bower_components`));
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// mongodb
let db;
MongoClient.connect('mongodb://favoredtracks:karaokeparty@ds129003.mlab.com:29003/favorite-tracks', (err, database) => {
  // ... start the server
  if (err) return console.log(err);
  db = database;
  app.listen(port, () => {
    console.log(`Our app is running on http://localhost:${port}`);
  });
});

app.use('https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&quorum_factor=1', (req, res) => {
  // res.set({
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
  //   'Access-Control-Allow-Methods': 'GET, PUT, POST',
  // });
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
});

// set the home page route
app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
  // ejs render automatically looks in the views folder
  // res.render('index');
});

// make get request to songs
app.get('/songs', (req, res) => {
  res.sendFile('./public/templates/songs.html', { root: __dirname });
});

// make post request to favorites
app.post('/favorites', (req, res) => {
  db.collection('favorites').save(req.body, (err, result) => {
    if (err) return console.log(err);
    res.redirect('/');
  });
});

app.get('/favorites', (req, res) => {
  // res.sendFile('./')
  db.collection('favorites').find().toArray((err, results) => {
    if (err) { console.error(err); }
    console.log(results);
    res.send(results);
  });
});

app.delete('/favorites/:id', (req, res) => {
  db.collection('favorites').remove({ _id: new ObjectId(req.params.id) }, (err, results) => {
    if (err) { console.error(err); }
    // console.log(results, 'deleted song?');
    res.send(results);
  });
});

