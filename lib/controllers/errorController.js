"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorResponse = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
};
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status;
    err.message = err.message || "Something went wrong";
    errorResponse(err, res);
    next();
};
exports.default = globalErrorHandler;
