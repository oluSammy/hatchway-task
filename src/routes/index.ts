import express, {
  Request,
  Response,
  NextFunction
} from "express";
import { testController } from "../controllers/indexController";

const router = express.Router();

router.get('/', testController);

export default router;
