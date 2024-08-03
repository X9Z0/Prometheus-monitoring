import { Request, Response, NextFunction } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  const statTime = Date.now();
  next();
  const endTime = Date.now();
  console.log(`Request took ${endTime - statTime}`);
};
