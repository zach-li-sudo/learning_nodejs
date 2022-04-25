const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// zhuoli
// VfFAxhXxAS5hOP63

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://zhuoli:<VfFAxhXxAS5hOP63>@cluster0.thkl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(client => {
    console.log('MongoDB Connected!');
    callback(client);
  })
  .catch(err => {
    console.log(err);
  });


}

module.exports = mongoConnect;