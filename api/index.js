const apiRoute = require('express').Router();

// abstracted PG queries
const { insert, get, update } = require('./db.js'); 


// TO DO move to db.js - DERIVED PROPERTY
// convert employee status (in/active) to boolean
apiRoute.use((req, res, next)=>{ 
  req.body.Status = req.body.Status === 'active' ? true : false;
  next();
})

apiRoute.get('/employee', async (req, res) => {
  let employees = await get('employee', {});
  employees.forEach(emp => {
    // convert db boolean value to front-end friendly value
    emp.Status = emp.Status === true ? 'active' : 'inactive';
  });
  res.send(employees);
});

apiRoute.post('/employee', async (req, res) => {
  await insert('employee', req.body);
  res.sendStatus(200);
});

apiRoute.put('/employee/:_id', async (req, res) => {
  await update('employee', req.params, req.body);
  res.sendStatus(200);
});

module.exports = apiRoute;