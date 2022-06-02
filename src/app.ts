import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import globalErrorHandler from "./controllers/errorController";
import * as redis from 'redis'
import responseTime from "response-time";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import AppError from "./utils/AppError";

export const client = redis.createClient();

const app = express();
app.use(responseTime());
client.connect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

const EXPIRATION_TIME = 3600;

// catch 404 and forward to error handler
// handles all request url that do not exits on the server
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`can't find ${req.url} on this server`, 404));
});

// handles all global error
app.use(globalErrorHandler);

export default app;
