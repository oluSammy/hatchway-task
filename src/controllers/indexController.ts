import { fetchData } from './../services/API/API';
import { NextFunction, Request, Response } from 'express';
import { catchAsync } from './../utils/catchAsync';


export const testController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = await fetchData();
    res.status(200).json({
        status: 'success',
        message: 'This is a test controller',
        data
    });
})