const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => { console.log(`Now listening on ${port}`) });


// Build route handlers
app.get('/', (req, res) => {
  console.log('GET received');
  res.send('hello world');
})