const mongoose = require('mongoose');
const mongoDB = 'mongodb://db:27017/roster';
const shortid = require('shortid');

mongoose.connect(mongoDB, { useNewUrlParser: true,  useFindAndModify: false, useUnifiedTopology: true });
const db = mongoose.connection;

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({
  _id: {type: String, default: shortid.generate},
  First_name: String,
  MI: {type: String, maxlength: 1},
  Last_name: String,
  DOB: {type: String, maxlength: 10, minlength: 6},
  Hire_date: {type: String, maxlength: 10, minlength: 6},
  Status: Boolean
});

const Employee = mongoose.model('Employee', EmployeeSchema);

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

const get = async (collection, criteria) => {  
  let docs = await models[collection].find(criteria, '-__v').lean({ virtuals: true });
  return docs

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


