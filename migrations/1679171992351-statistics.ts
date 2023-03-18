import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class statistics1679171992351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'statistics',
        columns: [
          {
            name: 'user_uuid',
            isPrimary: true,
            isUnique: true,
            type: 'uuid',
          },
          {
            name: 'number_of_displays',
            type: 'int',
            default: 0,
          },
          {
            name: 'translated_correctly',
            type: 'int',
            default: 0,
          },
          {
            name: 'translated_wrong',
            type: 'int',
            default: 0,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('statistics');
  }
}
