const port = 8080;
const express = require ('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const {insert, get, update} = require('./api/db.js');

app.use('*', cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

app.get('/redirect', (req, res) => {
  console.log('redirect');
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