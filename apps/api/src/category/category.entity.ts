import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
@Index(['user_uuid', 'name'])
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  readonly uuid: string;

  @Column({ type: 'uuid' })
  readonly user_uuid: string;

  @Column({ type: 'varchar' })
  readonly name: string;
}
