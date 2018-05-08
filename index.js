const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const {calc_handler, actions} = require('./calc.js')
const supported_actions = Object.keys(actions).join(' ,')
app.get('/', (req, res) => {
  res.send("The endpoint is \"/calc\", supported actions are: "+supported_actions)
  }
)

app.post('/calc', calc_handler)

app.listen(3000, () => {
  console.log("The endpoint is \"/calc\", supported actions are: "+supported_actions)
})