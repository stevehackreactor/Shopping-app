const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let port = 3002;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
