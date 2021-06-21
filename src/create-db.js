import { createConnection } from 'mysql';

var con = createConnection({
  host: "localhost",
  user: "nodeapp",
  password: "Password123!@#"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodeapp", function (err, _result) {
    if (err) throw err;
    console.log("Database created");
  });
});