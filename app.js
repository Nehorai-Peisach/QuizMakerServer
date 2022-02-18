const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api.yaml');
const app = express();
const cors = require('cors');
const container = require('./helpers/containerConfig');
const db = container.resolve('db');
const config = container.resolve('config');
const questionsRouter = require('./routes/questionsRoutes');
const quizesRouter = require('./routes/quizesRouter');
const usersRouter = require('./routes/usersRouter');
const studentsRouter = require('./routes/studentsRouter');
const complitedQuizes = require('./routes/completedQuizesRouter')

app.use(cors());

db.connect().then(() =>
  app.listen(config.get('server.port'), () =>
    console.log(`YahalomTests server is running at ${config.get('server.host')}:${config.get('server.port')}`)
  )
);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.use('/api/questions', questionsRouter);
app.use('/api/quizes', quizesRouter);
app.use('/api/completedQuizes', complitedQuizes);
app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
