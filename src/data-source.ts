import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Field } from "./entity/Field.entity";
import { Spec } from "./entity/Spec.entity";
import { CreateCollectionsAndIndexes1667482571375 } from "./migration/1667482571375-CreateCollectionsAndIndexes";

export const dataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGODB_URL,
  entities: [Field, Spec],
  synchronize: false,
  migrations: [CreateCollectionsAndIndexes1667482571375],
});
