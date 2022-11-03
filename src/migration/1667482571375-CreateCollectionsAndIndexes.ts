import { MigrationInterface, QueryRunner } from 'typeorm';

import { dataSource } from '../data-source';
import { Field } from '../entity/Field.entity';

export class CreateCollectionsAndIndexes1667482571375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await dataSource.getMongoRepository(Field).createCollectionIndex('uniqueTitle', {
      unique: true,
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await dataSource.getMongoRepository(Field).dropCollectionIndex('uniqueTitle');
  }
}
