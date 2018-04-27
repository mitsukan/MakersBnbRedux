


ghettoInsertUser = function(username, password) {

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    /// MONGO DB STUFF
    MongoClient.connect(url, function(err, db){
      if (err) throw err;

      var database = db.db("ghettobnb");
      var userObject = { username: username, password: password};

      database.collection("users").insertOne(userObject, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });
  }
