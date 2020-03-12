# employee-roster

### Demo
View and interact with app at https://nicolemunoz.xyz

You will need to create a user account and verify it through email.

### Built with
- React 16.13.0
- Redux 4.0.5
- React Router
- Webpack, Babel
- Node
- Express
- Mongoose
- AWS
  - Cognito (user identity management)
  - EC2, Route 53, SSL certification (deployed demo)


### Dev environment
- Fork and clone https://github.com/nicolemunoz99/employee-roster.git
- $ cd into employee-roster
- $ npm install
- $ npm run be-start (to start api and client server)
- $ npm run react-dev (to compile and watch client files)
- In browser go to http://localhost:8080 to view app

URLS for the server and database are in /urls.js and /api/urls.js, respectively.

### Future features
- Allow user to sort employees by name, status.
- Right now the login doesn't protect data and you can bypass simply by visiting the /employees route. To secure the data,
I would store a session Id as a cookie and include it as a query in the redirect url. When the login service redirects to my api,
store the login-service code and session Id in database. When the client makes an api request, send the session id from local
cookie and verify that it's associated with a valid login-service code before fulfilling request. If it isn't, redirect client
to login page.
