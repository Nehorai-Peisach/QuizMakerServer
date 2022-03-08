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
const reportsRouter = require('./routes/reportsRouter');
const complitedQuizes = require('./routes/completedQuizesRouter');
const logger = require('./logger');

app.use(cors());

db.connect()
  .then(() => {
    logger.info('Connected to Database');
    app.listen(config.get('server.port'), () => {
      logger.info(`YahalomTests server is running at ${config.get('server.host')}:${config.get('server.port')}`);
    });
  })
  .catch((err) => logger.error(err));

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.use('/api/questions', questionsRouter);
app.use('/api/quizes', quizesRouter);
app.use('/api/completedQuizes', complitedQuizes);
app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
app.use('/api/reports', reportsRouter);
