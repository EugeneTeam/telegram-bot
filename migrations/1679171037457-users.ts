import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class users1679171037457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'uui',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            type: 'uuid',
          },
          {
            name: 'telegram_id',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'nickname',
            type: 'varchar',
            isNullable: true,
            default: null,
          },
          {
            name: 'first_name',
            type: 'varchar',
            isNullable: true,
            default: null,
          },
          {
            name: 'last_name',
            type: 'varchar',
            isNullable: true,
            default: null,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
