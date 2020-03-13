# employee-roster

### Demo
View and interact with app at https://nicolemunoz.xyz

You will need to create a user account and verify it through email.

### Features
- Login and authentication via AWS Amplify
- Employee details toggle. 
- Edit details button located in details component.
- Toggle status in details component.
- Inactive employee names displayed with a strike-through.


![features](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/details.jpg)


### Add employee form
![add_form](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/add-employee.jpg)

### Edit employee form
Same component as add-employee form. Auto-populates with selected employee details for easy editing.

![edit_form](https://github.com/nicolemunoz99/employee-roster/blob/master/readme-files/edit-employee.jpg)

### Responsive design
Edit and toggle-status buttons located at bottom of details component on smaller screens

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
  - Amplify (auth platform)
  - EC2, Route 53, TLS/SSL certification (deployed demo)


### Dev environment
(assumes you have MongoDB on a running server)
- Fork and clone https://github.com/nicolemunoz99/employee-roster.git
- $ cd into employee-roster
- $ npm install
- $ npm run be-start (start api/client server)
- $ npm run react-dev (compile and watch client files)
- In browser go to http://localhost:8080/employees to view app

NOTE: Login platform disabled in repo.

URLs for the server and database are in /urls.js and /api/urls.js, respectively.

### Future features
- Allow user to sort employees by name, status.
- Allow users to search for employees.
- Client handling of larger datasets
  - don't send entire dataset to client
  - paginate get request
  - when user scrolls to bottom, automatically do another get request for next page
