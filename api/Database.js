const MongoClient = require('mongodb').MongoClient;

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    MongoClient.connect("mongodb://localhost:27017/Bontrip", function (err, db) {

      if(err) throw err;

      console.log('Connected!');
      return db;
    });
  }
}

module.exports = Database;
