import { Response, NextFunction, Request } from "express";
import { HttpError } from "http-errors";

const errorResponse = (err: HttpError, res: Response) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
};


const globalErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status;
    err.message = err.message || "Something went wrong";

    errorResponse(err, res);

    next()
}

export default globalErrorHandler;