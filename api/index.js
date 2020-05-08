const CognitoExpress = require("cognito-express"); // verifies JWT tokens
require('custom-env').env(true);
const apiRoute = require('express').Router();

const { insert, get, update } = require('./db.js'); // abstracted PG queries



const cognitoExpress = new CognitoExpress({
  region: "us-east-2",
  cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
  tokenUse: "access", // access | id
  tokenExpiration: 3600000 // default expiration (3600000 ms)
});

// verify JWT tokens
apiRoute.use((req, res, next) => {
  let accessTokenFromClient = req.headers.accesstoken;
  if (!accessTokenFromClient) return res.status(401).send('Cognito Access Token missing from headers');

  cognitoExpress.validate(accessTokenFromClient, (err, cognitoResponse) => {
    if (err) return res.status(401).send(err);
    next();
  });
});


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