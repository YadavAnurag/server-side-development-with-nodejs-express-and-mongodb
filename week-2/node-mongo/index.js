const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://localhost:127.0.0.1';
const dbName = 'conFusion';

MongoClient.connect(dbURL, {useUnifiedTopology: true})
  .then((client) => {
    const Client = client;
    console.log('Successfully connected to db');

    const db = Client.db(dbName);
    const dishesCollection = db.collection('dishes');

    dishesCollection.insertOne({
      name: 'anu',
      description: 'this is my desc'
    }).then(dish => {
      console.log(dish.ops);
    }).catch(err => {
      console.log('Failed to insert doc', err);
    });

    dishesCollection.find({}).toArray()
      .then(docs => {
        console.log('Found\n', docs);
      })
      .catch(err => {
        console.log('Error while finding', err);
      });
    
    db.dropCollection('dishes')
      .then(result => {
        console.log('Dishes collection dropped', result);
      })
      .catch(err => console.log('Error while dropping collection'));
  })
  .catch(err => {
    console.log('Failed to connect to database\n', err);
  });
