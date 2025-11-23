const express = require('express')
const cors = require('cors');
const app = express() 

app.use(cors())
app.use(express.json());

app.use('/', express.static( __dirname + '/'))

app.get('/get-profile', (req, res) => {
    res.json({
        name: "Anna Smith",
        email: "robustzig@example.com",
        interests: "coding"
    });
});

app.listen(3000, function () {
    console.log("app listening on port 3000")
})
