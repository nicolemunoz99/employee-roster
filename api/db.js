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

const UserSchema = new Schema ({
  _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
  pw: String,
  username: {type: String, unique: true},
  salt: String
})

const Employee = mongoose.model('EmployeeModel', EmployeeSchema);
const User = mongoose.model('UserModel', UserSchema);

const models = {
  employee: Employee,
  user: User
};

// collection: string of collection name
// conditions: object with criteria to match;
// doc: object to insert

const insert = (collection, doc) => {
  console.log(collection, doc)
  return new Promise((resolve, reject) => {
    let newDoc = new models[collection](doc);
    newDoc.save((err) => {
      if (err) reject(err);
      else resolve(newDoc);
    });
  });
};

const get = (collection, criteria) => {
  return new Promise((resolve, reject) => {
    models[collection].find(criteria, (err, employees) => {
      if (err) reject(err);
      else resolve(employees)
    });
  });
}


// update: object with key-values to update
const update = (collection, conditions, update) => {
  return new Promise((resolve, reject) => {
    models[collection].findOneAndUpdate(conditions, {$set: update}, (err) => {
      if (err) reject(err);
      else resolve()
    });
  });
}

module.exports = {insert, get, update};

