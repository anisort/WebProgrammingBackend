import { Product } from "../../products/entities/product.entity";
export declare class Category {
    id: number;
    name: string;
    description?: string;
    image: string;
    created_at: Date;
    update_at: Date;
    products: Product[];
}
