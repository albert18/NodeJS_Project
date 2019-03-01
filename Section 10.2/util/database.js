const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://johnDoe:Albert18@nodejscluster0-zlz10.mongodb.net/test?retryWrites=true'
        )
    .then(client => {
        console.log('Connected!')
        callback(callback);
    })
    .catch(err => {
        console.log(err)
    });
}

module.exports = mongoConnect;
