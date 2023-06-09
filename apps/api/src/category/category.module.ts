import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryRepositoryProvider } from './providers/category-repository.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService, CategoryRepositoryProvider],
})
export class CategoryModule {}
