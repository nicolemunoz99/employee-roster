const express = require ('express');
const cors = require('cors');
const port = 7200;
const app = express();
const bcrypt = require('bcrypt');
app.use('*', cors());
const saltSize = 12; 

const {insert, get, update} = require('./db.js');



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
  console.log('post', req.body)
  let newEmployee = await insert('employee', req.body);
  res.send(newEmployee);
});

app.put('/employee/:_id', async (req, res) => {
  console.log('put', req.body)
  await update('employee', req.params, req.body);
  res.sendStatus(200);
});

app.post('/user', async (req, res) => {
  // check if username exists;
  let allUsers = await get('user', {});
  if ( allUsers.find(user => {user.username === req.body.username}) === undefined ) {
    res.sendStatus(204);
    return;
  }
  req.body.salt = await bcrypt.genSalt(saltSize);
  req.body.pw = await bcrypt.hash(req.body.pw, req.body.salt);
  let user = await insert('user', req.body) 
  res.send(user);
});

app.get('/user', async (req, res) => {
  let thisUser = (await get('user', {username: req.body.username}))[0];
  if (Object.keys(thisUser).length === 0) {
    res.sendStatus(204); // user doesn't exist
    return;
  }
  let pwAttempt = await bcrypt.hash(req.body.pw, thisUser.salt);
  if (pwAttempt === thisUser.pw) {
    res.sendStatus(200);
  } else {
    res.sendStatus(204); // password doesn't match
  }
});


app.listen(port, () => console.log('Server listening on port ' + port));