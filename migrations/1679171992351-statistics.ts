import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class words1679171992351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'statistics',
        foreignKeys: [
          {
            name: 'users_statistics_user_uuid_fkey',
            columnNames: ['user_uuid'],
            referencedTableName: 'users',
            referencedColumnNames: ['uuid'],
            onDelete: 'CASCADE',
          },
          {
            name: 'languages_statistics_dlfnw_fkey',
            columnNames: ['dlfnw'],
            referencedTableName: 'languages',
            referencedColumnNames: ['uuid'],
          },
          {
            name: 'languages_statistics_dlfnt_fkey',
            columnNames: ['dlfnt'],
            referencedTableName: 'languages',
            referencedColumnNames: ['uuid'],
          },
          {
            name: 'languages_statistics_ui_language_fkey',
            columnNames: ['ui_language'],
            referencedTableName: 'languages',
            referencedColumnNames: ['uuid'],
          },
        ],
        columns: [
          {
            name: 'user_uuid',
            isPrimary: true,
            isUnique: true,
            type: 'uuid',
          },
          {
            comment: 'default language for new translate',
            name: 'dlfnw',
            type: 'uuid',
          },
          {
            comment: 'default language for new translate',
            name: 'dlfnt',
            type: 'uuid',
          },
          {
            name: 'ui_language',
            type: 'uuid',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('statistics');
  }
}
