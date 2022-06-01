import { fetchData } from "./../services/API/API";
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "./../utils/catchAsync";
import ResponseClass from "../utils/response";
import { client } from "../app";

const response = new ResponseClass();
const EXPIRATION_TIME = 3600;

export const testController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const cachedData = await client.get("private_jets");
    console.log({ cachedData: "cachedData" });
    if (cachedData) {
      console.log("using cached data");
      response.setSuccess(
        200,
        "Using cached data",
        JSON.parse(cachedData)
      );
      return response.send(res);
    }

    const data = await fetchData();

    // client.set()

    client.setEx("private_jets", EXPIRATION_TIME, JSON.stringify(data));

    response.setSuccess(200, "Data Fetched", data);
    return response.send(res);
  }
);
