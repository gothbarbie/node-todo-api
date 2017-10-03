const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.')
  }

  console.log('Connected to MongoDB server...')

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result)
  // })

  // Delete One
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result)
  // })

  // Find One And Delete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result)
  // })


  // db.close()
})
