import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { FileTypeEnum } from '../apps/telegram-bot-updated/src/file/enums/file-type.enum';

export class files1679171283434 implements MigrationInterface {
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
            name: 'token',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'type',
            type: 'enum',
            enum: [
              FileTypeEnum.VIDEO,
              FileTypeEnum.IMAGE,
              FileTypeEnum.AUDIO,
              FileTypeEnum.VOICE,
              FileTypeEnum.DOCUMENT,
            ],
          },
          {
            name: 'user_uuid',
            type: 'uuid',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('files');
  }
}
