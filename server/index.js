/*eslint-disable camelcase*/
const path = require('path');
const express = require('express');


const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, () => {
  console.log('Server listening on Port: ', PORT);
});

app.use(express.static(path.join(__dirname, '..', 'client/src/public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/src/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});
