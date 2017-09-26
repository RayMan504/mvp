const express = require('express');
const querystring = require('querystring');
const request = require('request');
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// const DEV = !!process.env.DEV;
const stateKey = 'spotify_auth_state';

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;


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

const generateRandomString = function (length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

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

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope = 'user-read-playback-state';
  res.redirect(`https://accounts.spotify.com/authorize?${
    querystring.stringify({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri,
      state,
    })}`);
});

app.get('/callback', (req, res) => {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    console.log('state mismatch', `state: ${state}`, `storedState ${storedState}`, 'cookies ', req.cookies);
    res.render('pages/callback', {
      access_token: null,
      expires_in: null,
    });
  } else {
    console.log('do i hit??');
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${new Buffer(`${client_id  }:${  client_secret}`).toString('base64')}`,
      },
      json: true,
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
          refresh_token = body.refresh_token,
          expires_in = body.expires_in;

        console.log('everything is fine');
        res.cookie('refresh_token', refresh_token, { maxAge: 30 * 24 * 3600 * 1000, domain: 'localhost' });

        res.render('pages/callback', {
          access_token,
          expires_in,
          refresh_token,
        });
      } else {
        console.log('wrong token');

        res.render('pages/callback', {
          access_token: null,
          expires_in: null,
        });
      }
    });
  }
});

app.post('/token', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const refreshToken = req.body ? req.body.refresh_token : null;
  if (refreshToken) {
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      },
      headers: {
        Authorization: `Basic ${new Buffer(`${client_id  }:${  client_secret}`).toString('base64')}`,
      },
      json: true,
    };
    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
          expires_in = body.expires_in;

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ access_token, expires_in }));
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ access_token: '', expires_in: '' }));
      }
    });
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ access_token: '', expires_in: '' }));
  }
});
