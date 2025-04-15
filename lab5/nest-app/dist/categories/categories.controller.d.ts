import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginateQuery } from 'nestjs-paginate';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(query: PaginateQuery): Promise<import("nestjs-paginate").Paginated<import("./entities/category.entity").Category>>;
    findOne(id: string): Promise<import("./entities/category.entity").Category | null>;
    findProductsByCategoryId(id: string, query: PaginateQuery): Promise<import("nestjs-paginate").Paginated<import("../products/entities/product.entity").Product>>;
    create(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto & import("./entities/category.entity").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
