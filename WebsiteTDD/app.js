const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
  res.send('Hello, User!');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye, User!');
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

module.exports = app;
