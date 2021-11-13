import express from 'express';

const router = express.Router();

router.get('/hello', (_req, res) => {
  // #swagger.tags = ['Demo']
  return res.json({
    code: 'SUCCESS',
    message: '',
    data: 'Hello',
  });
});

export default router;
