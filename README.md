# employee-roster

### Demo
View and interact with app at https://nicolemunoz.xyz

You will need to create a user account and verify it through email.

### Features
![features](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/details.jpg)


### Add employee form
![add_form](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/add-employee.jpg)

### Edit employee form
Same component as add-employee form. Auto-populates with selected employee details.
![edit_form](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/edit-employee.jpg)

### Responsive design
Edit and toggle-status buttons located below product details on smaller screens
![responsive](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/responsive.jpg)


### Built with
- React 16.13.0
- Redux 4.0.5
- React Router
- Webpack, Babel
- Bootstrap (responsive design, form features)
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
- $ npm run be-start (start api/client server)
- $ npm run react-dev (compile and watch client files)
- In browser go to http://localhost:8080 to view app

URLs for the server and database are in /urls.js and /api/urls.js, respectively.

### Future features
- Allow user to sort employees by name, status.
- Allow users to search for employees.
- Right now the login doesn't protect data and you can bypass simply by visiting the /employees route. To secure the data,
I would store a session Id as a cookie and include it as a query in the redirect url. When the login service redirects to my api,
store the login-service code and session Id in database. When the client makes an api request, send the session id from local
cookie and verify that it's associated with a valid login-service code before fulfilling request. If it isn't, redirect client
to login page.
- Ability to logout
- Client handling of larger datasets
 - don't send entire dataset to client
 - paginate get request
 - when user scrolls to bottom, automatically do another get request for next page
