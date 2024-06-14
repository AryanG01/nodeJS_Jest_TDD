const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User hit the resource');
    res.status(200).send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});