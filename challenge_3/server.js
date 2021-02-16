const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database/index.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body)
  database.save(req.body)
    .then((dbData)=>{
      res.send(dbData)
    })

})

const port = 3000
app.listen(port, () => {
  console.log(`server.js started, listening at http://localhost:${port}`)
})