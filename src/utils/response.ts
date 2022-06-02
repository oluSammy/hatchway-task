import { Response } from "express";
import { ResponseData } from "../types/types";

class ResponseStatus {
  statusCode: number | null;
  status: string | null;
  data: ResponseData | null;
  message: string | null;

  constructor() {
    this.statusCode = null;
    this.status = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode: number, message: string, data: ResponseData): void {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.status = "Successful";
  }

  send(res: Response): Response {
    const result = {
      status: this.status,
      message: this.message,
      data: this.data,
    };

    return res.status(this.statusCode ? this.statusCode : 200).json(result);
  }
}
export default ResponseStatus;
