const router = require('./routes/route.js');

const express = require('express');

const app = express();

const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log('Ta rodando')
})
