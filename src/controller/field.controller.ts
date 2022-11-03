import { ObjectId } from 'mongodb';

import { dataSource } from '../data-source';
import { Field, FieldOption } from '../entity/Field.entity';

export class FieldController {
  private repo = dataSource.getRepository(Field);

  async create(data: Omit<Field, 'id'>): Promise<Field> {
    const field = new Field();
    field.title = data.title;
    field.options = data.options.map((option) => new FieldOption(ObjectId(), option.title));

    return await this.repo.save(field);
  }

  async list(): Promise<Field[]> {
    return await this.repo.find();
  }
}
