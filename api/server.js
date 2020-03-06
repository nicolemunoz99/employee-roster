const express = require ('express');
const cors = require('cors');
const port = 7200;
const app = express();

const {postEmployee, getAllEmployees, updateEmployee} = require('./db.js');

// app.use('*', cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());



app.get('/', async (req, res) => {
  let employees = await getAllEmployees();
  res.send(employees);
});

app.post('/', async (req, res) => {
  let newEmployee = await postEmployee(req.body);
  res.send(newEmployee);
});

app.put('/', async (req, res) => {
  await updateEmployee(req.body.conditions, {$set: req.body.update});
  res.sendStatus(200);
});


app.listen(port, () => console.log('Server listening on port ' + port));