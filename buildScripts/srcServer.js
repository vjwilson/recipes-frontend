import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */

const port = 5001;
const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Marley", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Wynette", "email": "tammy@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Turner", "email": "tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
