const express = require ('express');
const router = require('./routes/index.js');
const cors = require('cors');
const port = 7200;
const app = express();

// app.use('*', cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', router);


app.listen(port, () => console.log('Server listening on port ' + port));