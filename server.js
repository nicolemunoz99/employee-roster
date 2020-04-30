const port = 8080;
const express = require ('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const {insert, get, update} = require('./api/db.js');

app.use('*', cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

app.get('/redirect', async (req, res) => {
  try {
    if (req.query.code) {
      let reqParams = {
        grant_type: 'authorization_code',
        client_id: '2pf8f80gs65gnsihmaeln6orab',
        redirect_uri: 'http://localhost:8080/redirect',
        code: req.query.code
      }


      let result = await axios.post(`https://munoztest.auth.us-east-2.amazoncognito.com/oauth2/token/`, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: reqParams
        });

    } 
  }
  
  catch (err) {
    console.log('ERROR', err)
  }

  res.redirect('/employees');
});

app.use((req, res, next)=>{
  req.body.Status = req.body.Status === 'active' ? true : false;
  next();
})

app.get('/employee', async (req, res) => {
  let employees = await get('employee', {});
  employees.forEach(emp => {
    emp.Status = emp.Status === true ? 'active' : 'inactive';
  });
  res.send(employees);
});

app.post('/employee', async (req, res) => {
  let newEmployee = await insert('employee', req.body);
  res.send(newEmployee);
});

app.put('/employee/:_id', async (req, res) => {
  await update('employee', req.params, req.body);
  res.sendStatus(200);
});

app.get('*', (req, res) => { // all other get requests to front-end routing
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});


app.listen(port, () => console.log('Server listening on port ' + port));