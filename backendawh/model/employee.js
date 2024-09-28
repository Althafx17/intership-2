var mongoose = require('mongoose');
var schema = mongoose.Schema({
    name: String,
    age: Number,
    dept: String,
    sal: Number
});
var EmployeeModel = mongoose.model("employee", schema);
module.exports = EmployeeModel