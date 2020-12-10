import express, { Request, Response, NextFunction } from "express";

import Logger from "../core/Logger";
import cors from "cors";
import { corsUrl, environment } from "../environment";
import "../database";

import { NotFoundError, ApiError, InternalError } from "../core/ApiError";
import routes from "../routes";

process.on("uncaughtException", (e) => {
  Logger.error(e);
});

const app = express();

app.use(express.json({ limit: "12mb" }));

app.use(
  express.urlencoded({ extended: true, parameterLimit: 5000, limit: "12mb" })
);

app.use(cors());

app.use("/", routes);

//catch error 404
app.use((req, res, next) => next(new NotFoundError()));

//middleware Error Handler

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  }
  else {
    if (environment === "development") {
      Logger.error(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
});

export default app;
