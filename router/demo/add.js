const express = require('express');

const { add } = require('core/demo');

const router = express.Router();

router.get('/:a(\\d+)/:b(\\d+)', (req, res) => {
  // #swagger.tags = ['Demo']
  const { a, b } = req.params;
  const data = add(+a, +b);
  return res.json({
    code: 'SUCCESS',
    data,
  });
});

module.exports = router;
