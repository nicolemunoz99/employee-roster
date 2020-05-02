require('custom-env').env(true);
const port = process.env.PORT;
const express = require ('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const apiRoute = require('./api/index.js');

app.use('*', cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));


// ... employee data requests ...
app.use('/api', apiRoute)


// ... all other GET reqs serve client ...
app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});


app.listen(port, () => console.log('Server listening on port ' + port));