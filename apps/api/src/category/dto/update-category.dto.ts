import { IsString, IsUUID } from 'class-validator';

export class UpdateCategoryDto {
  @IsUUID()
  readonly uuid: string;

  @IsString()
  readonly name: string;
}
