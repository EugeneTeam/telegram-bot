import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class words1679171992351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'files',
        foreignKeys: [
          {
            name: 'users_files_user_uuid_fkey',
            columnNames: ['user_uuid'],
            referencedTableName: 'users',
            referencedColumnNames: ['uuid'],
            onDelete: 'CASCADE',
          },
          {
            name: 'languages_files_languages_uuid_fkey',
            columnNames: ['languages_uuid'],
            referencedTableName: 'languages',
            referencedColumnNames: ['uuid'],
          },
          {
            name: 'statistics_files_statistic_uuid_fkey',
            columnNames: ['statistic_uuid'],
            referencedTableName: 'statistics',
            referencedColumnNames: ['uuid'],
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
            name: 'word',
            type: 'varchar',
          },
          {
            name: 'note',
            type: 'varchar',
            isNullable: true,
            default: null,
          },
          {
            name: 'user_uuid',
            type: 'uuid',
          },
          {
            name: 'language_uuid',
            type: 'uuid',
          },
          {
            name: 'statistic_uuid',
            type: 'uuid',
          },
        ],
        indices: [
          {
            isUnique: true,
            columnNames: ['word', 'user_uuid'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('words');
  }
}
