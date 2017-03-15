import * as express from "express";
var router = express.Router();
export default router;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
