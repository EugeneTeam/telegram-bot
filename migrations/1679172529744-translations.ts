import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class translations1679172529744 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'translations',
        foreignKeys: [
          {
            name: 'words_translations_word_uuid_fkey',
            columnNames: ['word_uuid'],
            referencedTableName: 'words',
            referencedColumnNames: ['uuid'],
            onDelete: 'CASCADE',
          },
          {
            name: 'languages_translations_languages_uuid_fkey',
            columnNames: ['languages_uuid'],
            referencedTableName: 'languages',
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
            name: 'translate',
            type: 'varchar',
          },
          {
            name: 'word_uuid',
            type: 'uuid',
          },
          {
            name: 'language_uuid',
            type: 'uuid',
          },
        ],
        indices: [
          {
            isUnique: true,
            columnNames: ['translate', 'word_uuid'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('translations');
  }
}
