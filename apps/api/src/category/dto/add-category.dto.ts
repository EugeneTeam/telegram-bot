import { IsString, IsUUID } from 'class-validator';

export class AddCategoryDto {
  @IsUUID()
  readonly user_uuid: string;

  @IsString()
  readonly name: string;
}
