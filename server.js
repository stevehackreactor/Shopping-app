const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

let app = express();
let port = 3002;

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TunaStarfish45',
  database: 'checkout'
});
db.connect();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({type: 'application/json'}));
// app.set('view engine', 'ejs');

app.use(express.static('public'));

// will have to have post handlers for each round of submission
// name, email, password
app.post('/', (req, res) => {
  console.log(req.body);

  let queryStr = 'insert into carts(name, email, password, addressLnOne, addressLnTwo, phone, creditCard, expiration, cvv, zipCode) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  let params = [req.body.name, req.body.email, req.body.password, req.body.addressLnOne, req.body.addressLnTwo, req.body.phone, req.body.creditCard, req.body.expiration, req.body.cvv, req.body.zipCode];
  // call db.query
  db.query(queryStr, params, (err, results) => {
    console.log(err, results);
    res.end('post successful');
  })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

// id INTEGER AUTO_INCREMENT,
//   name VARCHAR(50),
//   email VARCHAR(50),
//   password VARCHAR(50),
//   addressLnOne VARCHAR(50),
//   addressLnTwo VARCHAR(50),
//   phone INTEGER,
//   creditCard INTEGER,
//   expiration VARCHAR(50),
//   cvv INTEGER,
//   zipCode INTEGER