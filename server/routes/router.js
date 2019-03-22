const router = require('express').Router();

router.route('/')
  .get((req,res) => {
      res.send('testing router');
  });

module.exports = router;