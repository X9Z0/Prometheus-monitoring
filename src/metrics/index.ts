import { NextFunction, Request, Response } from "express";
import { requestCounter } from "./requestCount";
import { activeRequestGauge } from "./requestGauge";

export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();
  activeRequestGauge.inc();

  res.on("finish", function () {
    const endTime = Date.now();
    console.log(`Request took ${endTime - startTime}ms`);

    // Increment request counter
    requestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode,
    });

    activeRequestGauge.dec();
  });
  next();
};
