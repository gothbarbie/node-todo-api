const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.')
  }

  console.log('Connected to MongoDB server...')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unabled to insert todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Hanna Söderström',
  //   age: 33,
  //   location: 'Sweden'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to inser User', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  
  db.close()
})
