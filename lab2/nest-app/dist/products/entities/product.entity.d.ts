import { Category } from "../../categories/entities/category.entity";
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    created_at: Date;
    update_at: Date;
    category_id: number;
    category: Category;
}
