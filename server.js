// server.js
const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// MongoDB connection
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'company_db'
const collName = 'employees'

let db, collection

// Connect to MongoDB once at server start
async function startServer() {
    try {
        await client.connect()
        console.log("✅ Connected successfully to MongoDB")

        db = client.db(dbName)
        collection = db.collection(collName)

        // Start Express server AFTER DB connection
        app.listen(3000, () => {
            console.log("🌐 Backend + Frontend running on http://localhost:3000")
        })
    } catch (err) {
        console.error("❌ Failed to connect to MongoDB:", err)
        process.exit(1)
    }
}
startServer()

// Serve Vue frontend (dist folder)
//app.use(express.static(path.join(__dirname, 'dist')))

// API routes
app.get('/get-profile', async (req, res) => {
    try {
        // You can also fetch from MongoDB here if needed
        const response = {
            name: "Anna Smith",
            email: "robustzig@example.com",
            interests: "coding"
        }
        res.send(response)
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: "Failed to get profile" })
    }
})

app.post('/update-profile', async (req, res) => {
    const payload = req.body

    if (Object.keys(payload).length === 0) {
        return res.send({ error: "Empty payload. Couldn't update user profile" })
    }

    try {
        // Insert payload document
        const result = await collection.insertOne(payload)

        // Extra IDs (old code preserved)
        try { await collection.insertOne({ _id: 1 }) } catch(e){console.log("Skipping duplicate _id 1")}
        try { await collection.insertOne({ _id: 2 }) } catch(e){console.log("Skipping duplicate _id 2")}

        res.send({
            message: "User profile data updated successfully",
            insertedId: result.insertedId
        })
    } catch (err) {
        console.error("Error inserting document:", err)
        res.status(500).send({ error: "Failed to insert document" })
    }
})

// Catch-all for frontend routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
