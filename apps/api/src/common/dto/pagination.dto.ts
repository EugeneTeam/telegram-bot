import { IsInt, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  readonly skip: number;

  @IsOptional()
  @IsInt()
  readonly take: number;

  @IsOptional()
  @IsInt()
  readonly limit: number;

  @IsOptional()
  @IsInt()
  readonly offset: number;
}
