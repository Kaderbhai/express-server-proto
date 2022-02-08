const express = require('express')
const fs = require('fs');

const app = express()

app.get('/batteries', (req, res) => {
    // this could be made into a read stream
    let rawData = fs.readFileSync("db.json");
    let batteries = JSON.parse(rawData);
    res.setHeader('Content-Type', 'application/json');
    res.json(batteries)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})