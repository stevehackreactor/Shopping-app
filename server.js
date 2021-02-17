const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();
let port = 3002;

app.use(bodyParser.json());

// app.set('view engine', 'ejs');

app.use(express.static('public'));

// will have to have post handlers for each round of submission
// name, email, password
app.post('/user_info1', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'), (err) => {
    if (err) {
      console.log('error');
    } else {
      console.log('file sent');
    }
  })
})
// ship address, phone number
app.post('/user_info2', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'), (err) => {
    if (err) {
      console.log('error');
    } else {
      console.log('file sent');
    }
  })
})
// credit card # expiry date, cvv, zip code
app.post('/user_info3', (req, res) => {
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
