import * as express from 'express';
import { Request } from 'express';
import { HttpError } from 'restify-errors';
import { fieldRouter } from './handler/field.handler';
import { specRouter } from './handler/spec.handler';

export const router = express.Router();

router.use(function (req: Request, res, next) {
  req.entityParams = {} as any;
  next();
});

router.use(fieldRouter);
router.use(specRouter);

// error handler
router.use((err: Error, req, res, _next) => {
  let error = err;
  if (err instanceof HttpError) {
    error = err['jse_info'];
    res.status(err.statusCode);
  } else {
    console.log(err);
    res.status(500);
  }

  res.json({ ...error });
});
