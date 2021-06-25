var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var conn = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'nodeapp',      //  assign your database username
  password: 'Password123!@#',      // assign your database password
  database: 'projectwork' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
