import { ObjectId } from 'mongodb';

import { dataSource } from '../data-source';
import { Field, FieldOption } from '../entity/Field.entity';

type FieldCreateDto = {
  title: string;
  options: {
    title: string;
  }[];
};

export class FieldController {
  private repo = dataSource.getRepository(Field);

  async create(data: FieldCreateDto): Promise<Field> {
    const field = new Field();
    field.title = data.title;
    field.options = data.options.map((option) => new FieldOption(ObjectId(), option.title));

    return await this.repo.save(field);
  }

  async list(): Promise<Field[]> {
    return await this.repo.find();
  }
}
