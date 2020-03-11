const express = require ('express');
const path = require('path');
const port = 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => console.log('client server listening on port ' + port));
