import { AddCategoryDto } from '../dto/add-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { RemoveCategoryDto } from '../dto/remove-category.dto';
import { GetCategoryByUuidDto } from '../dto/get-category-by-uuid.dto';
import { GetAllCategoriesDto } from '../dto/get-all-categories.dto';
import { RowsAndCountListInterface } from '../../common/interfaces/rows-and-count-list.interface';

export interface CategoryRepositoryInterface<C> {
  addCategory(data: AddCategoryDto): Promise<C>;
  updateCategory(data: UpdateCategoryDto): Promise<C>;
  removeCategory(data: RemoveCategoryDto): Promise<boolean>;
  getCategoryByUuid(data: GetCategoryByUuidDto): Promise<C>;
  getAllCategory(
    data: GetAllCategoriesDto,
  ): Promise<RowsAndCountListInterface<C>>;
}
