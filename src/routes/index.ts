import express, {
  Request,
  Response,
  NextFunction
} from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello Hatchways!");
});

export default router;
