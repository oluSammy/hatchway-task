import {
    NextFunction, Request,
    Response
} from "express";

// function to catch errors and send them to the error handler. prevents using try catch in the controller
export const catchAsync = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    };
};

export default catchAsync;