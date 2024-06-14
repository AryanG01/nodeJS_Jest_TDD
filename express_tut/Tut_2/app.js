const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send('Home Page');
    console.log('User hit the resource');
})

app.all("*", (req, res)=> {
    res.status(404).send('<h1>Resource not found</h1>');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})