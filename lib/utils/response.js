"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseStatus {
    constructor() {
        this.statusCode = null;
        this.status = null;
        this.data = null;
        this.message = null;
    }
    setSuccess(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.status = "Successful";
    }
    send(res) {
        const result = {
            status: this.status,
            message: this.message,
            data: this.data,
        };
        return res.status(this.statusCode ? this.statusCode : 200).json(result);
    }
}
exports.default = ResponseStatus;
