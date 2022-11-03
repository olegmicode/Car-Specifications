import { Request, Response, NextFunction } from "express";
import { ObjectID } from "mongodb";
import * as errors from "restify-errors";

import { dataSource } from "../data-source";
import { Spec } from "../entity/Spec.entity";

export async function setSpec(req: Request, res: Response, next: NextFunction) {
  try {
    const specsRepo = dataSource.getRepository(Spec);
    const spec = await specsRepo.findOne({
      where: { _id: ObjectID(req.params.specId) },
    });

    // Throw a 403 here instead of 404 so abusers can't figure out which IDs map to a valid company.
    if (!spec) {
      next(
        new errors.ForbiddenError("You do not have permission to access this.")
      );
      return;
    }

    req.entityParams.spec = spec;
  } catch (e) {
    next(e);
    return;
  }
  next();
}
