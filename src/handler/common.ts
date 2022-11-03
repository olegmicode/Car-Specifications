import { Schema, checkSchema, validationResult } from "express-validator";
import { Request } from "express";
import * as Errors from "restify-errors";

export function schemaValidation(schema: Schema) {
  return [
    checkSchema(schema),
    async function (req: Request, res, next) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(
          new Errors.UnprocessableEntityError({
            info: { errors: errors.array() },
          })
        );
      }

      next();
    },
  ];
}
