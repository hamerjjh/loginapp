require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Item = require('../models/item');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
Item.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});

// create new users
var jonathan = new User({
  first_name: 'Jonathan',
  last_name: 'Smith',
  email: 'jonathan@gmail.com',
  password: 'password',
  items: [{ name: "Newspaper Digital Content" }, { name: "Television Digital Content" }]
});

var sarah = new User({
  first_name: 'Sarah',
  last_name: 'Brown',
  email: 'sarah@gmail.com',
  password: 'password',
  items: [{ name: "School Board Organization" }, { name: "Administration Content List" }]
});

var joe = new User({
  first_name: 'Joe',
  last_name: 'Doe',
  email: 'joe@gmail.com',
  password: 'password',
  items: [{ name: "Dog Park Information" }, { name: "Dog Rescue Content" }]
});

// save the users
jonathan.save(function(err) {
  if (err) console.log(err);

  console.log('jonathan created!');
});

sarah.save(function(err) {
  if (err) console.log(err);

  console.log('sarah created!');
});

joe.save(function(err) {
  if (err) console.log(err);
  
  console.log('joe created!');
});

mongoose.connection.close();