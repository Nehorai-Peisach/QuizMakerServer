const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./api.yaml')
const app = express()
const questionRouter = require('./routes/questionRoutes')
const cors = require('cors')
const container = require('./helpers/containerConfig')
const db = container.resolve('db')
const config = container.resolve('config')

app.use(cors())

db.connect().then(() =>
  app.listen(config.get('server.port'), () =>
    console.log(`YahalomTests server is running at ${config.get('server.host')}:${config.get('server.port')}`)
  )
)

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.use('/api/Questions', questionRouter)
