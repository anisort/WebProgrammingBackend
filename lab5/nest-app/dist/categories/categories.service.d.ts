import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Product } from "../products/entities/product.entity";
import { Repository } from 'typeorm';
import { PaginateQuery } from 'nestjs-paginate';
export declare class CategoriesService {
    private categoriesRepository;
    private productsRepository;
    constructor(categoriesRepository: Repository<Category>, productsRepository: Repository<Product>);
    create(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto & Category>;
    findProductsByCategoryId(categoryId: number, query: PaginateQuery): Promise<import("nestjs-paginate").Paginated<Product>>;
    findAll(query: PaginateQuery): Promise<import("nestjs-paginate").Paginated<Category>>;
    findOne(id: number): Promise<Category | null>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
