const express = require('express');
const morgan = require('morgan'); // log requests to the console (express4)
const bodyParser = require('body-parser');

const app = express();

// set the port of our application
// process.env.PORT consts the port be set by Heroku
const port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/bower_components`));
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// set the home page route
app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
  // ejs render automatically looks in the views folder
  // res.render('index');
});

// make get request to songs
app.get('/songs', (req, res) => {
  res.sendFile('./public/songs.html');
});

// make post request to songs

app.post('/songs', (req, res) => {
  // res.sendFile('./')
})

app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
