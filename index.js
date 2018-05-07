const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

//const {validate_request, calc_handler} = require('./calc.js')
//app.post('/calc', calc_handler)

app.listen(3000, () => console.log('Example app listening on port 3000!'))