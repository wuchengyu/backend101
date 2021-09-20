const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('router/swagger.json');

const demoAdd = require('router/demo/add');

const DEV = process.env.NODE_ENV !== 'production';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/demo/add', demoAdd);

if (DEV) {
  // Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.use('*', (_req, res) => res.status(404));

app.listen(port, () => {
  console.log(`> Start server @http://${host}:${port}`);
});
