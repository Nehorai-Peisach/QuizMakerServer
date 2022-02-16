const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./api.yaml')
const app = express()
const cors = require('cors')
const container = require('./helpers/containerConfig')
const db = container.resolve('db')
const config = container.resolve('config')
const questionRouter = require('./routes/questionRoutes')
const newTestRouter=require("./routes/NewTestRouter");
const usersRouter=require("./routes/usersRouter");
const studentsRouter=require("./routes/studentsRouter");

app.use(cors())

db.connect().then(() =>
  app.listen(config.get('server.port'), () =>
    console.log(`YahalomTests server is running at ${config.get('server.host')}:${config.get('server.port')}`)
  )
)

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.use('/api/Questions', questionRouter);
app.use('/api/quizes', newTestRouter);
app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
