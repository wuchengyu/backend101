import express from 'express';
import cors from 'cors';
import demoHello from '@/router/demo/hello';
import { PORT } from '@/utils/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/demo/hello', demoHello);

app.get('/', (_req, res) => res.send(process.env.NODE_ENV));

app.use('*', (_req, res) => res.status(404));

app.listen(PORT, () => {
  console.log(`> Start server`);
});
