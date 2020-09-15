const express = require('express')
const app = express()
 
app.get('/', function (request, response) {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
 

const PORT = '3000'
app.listen(PORT, () => {[
    console.log(`App running on port ${PORT}`)
]})

const postgres = require('postgres')
 
const sql = postgres({ ...options }) 
 