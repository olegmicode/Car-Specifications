import { Entity, ObjectID, ObjectIdColumn, Column, Unique } from "typeorm";

@Entity()
export class FieldOption {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  title: string;

  constructor(_id: ObjectID, title: string) {
    this._id = _id;
    this.title = title;
  }
}

@Entity()
export class Field {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  title: string;

  @Column((type) => FieldOption)
  options: FieldOption[];
}
