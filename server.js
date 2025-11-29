// server.js
const express = require('express')
const cors = require('cors');
const { MongoClient } = require('mongodb')

const app = express() 

app.use(cors())
app.use(express.json());


// MONGODB CONNECTION (OFFICIAL WAY)
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

const dbName = 'company_db'
const collName = 'employees'

// SERVE STATIC FILES
app.use('/', express.static( __dirname + '/'))

// GET PROFILE (STATIC RESPONSE)
app.get('/get-profile', async function(req, res) {
    // get data from database
    const response = {
        name: "Anna Smith",
        email: "robustzig@example.com",
        interests: "coding"
    }

    // connects to mongodb db
    // get data from database
    await client.connect()
    console.log('Connected successfully to server');

    res.send(response)
})

// INSERT DATA INTO MONGODB (FROM FRONTEND)
app.post('/update-profile', async function(req, res) {
    const payload = req.body
    console.log(payload)

     if (Object.keys(payload).length === 0) { 
        return res.send({ error: "empty payload. couldn't update user profile data" }) 
     }

    // initiates database
    // connect to mongodb database
    // save payload data to the database
    await client.connect()
    console.log('Connected successfully to server');
    
    const db = client.db(dbName)
    const collection = db.collection(collName)

     // insert payload using official syntax

    await collection.insertOne({ _id: 1 });
    await collection.insertOne({ _id: 2 });
    await collection.insertOne(payload)
    res.send({ info: "User Profile saved Updated successfully" })
})
  //      payload['id'] = 1
  //      await collection.insertOne(payload)
app.listen(3000, () => {
    console.log("app listening on port 3000")
})
