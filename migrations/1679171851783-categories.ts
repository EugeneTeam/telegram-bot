import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class categories1679171851783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        foreignKeys: [
          {
            name: 'users_files_user_uuid_fkey',
            columnNames: ['user_uuid'],
            referencedTableName: 'users',
            referencedColumnNames: ['uuid'],
            onDelete: 'CASCADE',
          },
        ],
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
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'user_uuid',
            type: 'uuid',
          },
        ],
        indices: [
          {
            isUnique: true,
            columnNames: ['name', 'user_uuid'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
