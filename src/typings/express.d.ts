import * as core from "express-serve-static-core";
import { Spec } from "../entity/Spec.entity";

declare module "express" {
  export interface Request<
    P = core.ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = core.Query,
    Locals extends Record<string, any> = Record<string, any>
  > extends core.Request<P, ResBody, ReqBody, ReqQuery, Locals> {
    entityParams: {
      spec: Spec;
    };
  }
}
