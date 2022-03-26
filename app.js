const express = require('express')
const path = require('path');
const app = express();

app.use(express.static('public'))

var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('listening on port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})