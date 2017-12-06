const express = require('express');
const path = require('path');
const words = require('./../DB/db');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/word', (req, res) => {
  var randomWord = words[Math.floor(Math.random()*words.length)];
  res.json(randomWord);
  console.log('Sent response data');
});

// The "catch-all" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/public/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Server listening on ${port}`);
