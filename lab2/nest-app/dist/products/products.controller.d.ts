import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginateQuery } from 'nestjs-paginate';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<CreateProductDto & import("./entities/product.entity").Product>;
    findAll(query: PaginateQuery): Promise<import("nestjs-paginate").Paginated<import("./entities/product.entity").Product>>;
    findOne(id: string): Promise<import("./entities/product.entity").Product | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
