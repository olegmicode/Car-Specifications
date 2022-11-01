import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTable1667308669309 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //     `ALTER TABLE "car" RENAME COLUMN "title" TO "name"`,
    // )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
