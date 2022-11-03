import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Spec {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  fieldValues: Record<string, any>;
}
