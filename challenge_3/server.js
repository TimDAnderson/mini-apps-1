const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database/index.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/id', (req, res) => {
  //give db document a name of init so we can get a db ID to track throughout app
  database.save({name: 'init'})
    .then((dbData)=>{
      res.send(dbData)
    })
})

app.post('/', (req, res) => {
  console.log('got a POST request')
  console.log(req.body)
  database.update(req.body)
    .then((dbData)=>{
      res.send(dbData)
    })
})

const port = 3000
app.listen(port, () => {
  console.log(`server.js started, listening at http://localhost:${port}`)
})