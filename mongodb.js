// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    } 
    const db = client.db(databaseName);

    // DELETE

    db.collection('users').deleteMany({
        age: 28
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })



    // UPDATE
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5cade8d667c62d0d1d4d35cd')
    // },{
    //     $set: {
    //         name: 'mike'
    //     },
    //     $inc: {
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: true
    // },{
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });



    // READ

    // db.collection('users').findOne({
    //     _id: new ObjectID('5cadf99657fe570efae85950')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(user);
    // });
    // db.collection('users').find( { age: 23 }).toArray((error, user) => {
    //     console.log(user)
    // })
    // db.collection('users').find( { age: 23 }).count((error, user) => {
    //     console.log(user)
    // })
    
    // db.collection('tasks').findOne( { 
    //     _id: new ObjectID('5caded5ec159470d8920913f')
    //     },
    //     (error, task) => {
    //         if (error) {
    //             return console.log (error);
    //         }
    //         console.log(task);
    //     }
    //     );

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(tasks);
    // });


    // CREATE

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Jessica',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: '28'
    //     },
    //     {
    //         name: 'Guther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Given food to dog',
    //         completed: true
    //     },
    //     {
    //         description: 'Buy Grocery',
    //         completed: false
    //     },
    //     {
    //         description: 'Pick up Jared',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     } 
    //     console.log(result.ops);
    // });
});