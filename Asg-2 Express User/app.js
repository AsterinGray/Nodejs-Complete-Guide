const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('Start the project');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('Send Dummy Respond');
  res.send(`<h1>This is the Dummy Pages</h1>`);
});

app.use('/', (req, res, next) => {
  console.log('Send Other Pages Respond');
  res.send(`<h1>This is the Other Pages</h1>`);
});

app.listen(3000);
