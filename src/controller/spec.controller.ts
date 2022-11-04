import { getRepository } from 'typeorm';
import * as errors from 'restify-errors';

import { Spec } from '../entity/Spec.entity';
import { dataSource } from '../data-source';

export class SpecController {
  private specRepository = dataSource.getRepository(Spec);

  async create(data: Omit<Spec, '_id'>) {
    const spec = this.specRepository.create(data);
    return await this.specRepository.save(spec);
  }

  async all() {
    return await this.specRepository.find();
  }

  async update(spec: Spec, updateData: Partial<Spec>) {
    Object.assign(spec, updateData);
    return await this.specRepository.save(spec);
  }

  async remove(spec: Spec) {
    return await this.specRepository.remove(spec);
  }
}
