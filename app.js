const config = require('config')
const express = require('express')
const app = express()
const questionRouter = require('./routes/questionRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
const Urls = require('./settings/staticUrls')

const MongoDb = require('./DAL/MongoDb')
app.use(cors())
app.listen(config.get('server.port'), () =>
  console.log(
    `YahalomTests server is running at ${config.get(
      'server.host'
    )}:${config.get('server.port')}`
  )
)

app.use(bodyParser.json())

app.use('/api/Questions', questionRouter)

dothis() = {
  db = new MongoDb()
  db.add()
}


