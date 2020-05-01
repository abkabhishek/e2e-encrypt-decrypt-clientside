const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000


// When we run the server our public file will also be ran
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))



app.get('/api', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))