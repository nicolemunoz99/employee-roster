var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true ,  useFindAndModify: false, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({
  _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
  firstName: String,
  middleInitial: {type: String, maxlength: 1, minlength: 1},
  lastName: String,
  dob: Number,
  dateOfEmployment: Number,
  status: Boolean
});

const Employee = mongoose.model('EmployeeModel', EmployeeSchema);

const postEmployee = (doc) => {
  return new Promise((resolve, reject) => {
    let newDoc = new Employee(doc);
    newDoc.save((err) => {
      if (err) reject(err);
      else resolve(newDoc);
    });
  });
};

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    Employee.find({}, (err, employees) => {
      if (err) reject(err);
      else resolve(employees)
    });
  });
}

const updateEmployee = (conditions, update) => {
  return new Promise((resolve, reject) => {
    Employee.findOneAndUpdate(conditions, update, (err) => {
      if (err) reject(err);
      else resolve()
    });
  });
}

module.exports = {postEmployee, getAllEmployees, updateEmployee};


