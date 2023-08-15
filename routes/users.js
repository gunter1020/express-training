import express from "express";

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.session.test = 'test' in req.session ? req.session.test + 1 : 1;
  res.send(`respond with a resource [${req.session.test}]`);
});

export default router;
