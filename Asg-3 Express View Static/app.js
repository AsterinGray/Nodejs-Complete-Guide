const express = require('express');

const path = require('path');

const app = express();

const route = require('./routes/route');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(route);

app.listen(3001);
