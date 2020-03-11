const express = require ('express');
const cors = require('cors');
const port = 7200;
const app = express();
const {insert, get, update} = require('./db.js');

app.use('*', cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

app.listen(port, () => console.log('Server listening on port ' + port));