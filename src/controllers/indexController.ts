import { fetchData } from './../services/API/API';
import { NextFunction, Request, Response } from 'express';
import { catchAsync } from './../utils/catchAsync';
import ResponseClass from '../utils/response';


const response = new ResponseClass();

export const testController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = await fetchData();

    response.setSuccess(200, "Data Fetched", data);
    return response.send(res);
})