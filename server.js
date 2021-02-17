const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
let port = 3002;

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'), (err) => {
    if (err) {
      console.log('error');
    } else {
      console.log('file sent');
    }
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
