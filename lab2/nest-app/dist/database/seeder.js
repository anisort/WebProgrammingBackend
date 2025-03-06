"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
const product_entity_1 = require("../products/entities/product.entity");
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'pg',
    port: 5432,
    username: 'pguser',
    password: 'password',
    database: 'nestjs',
    entities: [category_entity_1.Category, product_entity_1.Product],
    synchronize: true,
});
async function seedDatabase() {
    await dataSource.initialize();
    console.log("Database connection established.");
    const categoryRepository = dataSource.getRepository(category_entity_1.Category);
    const productRepository = dataSource.getRepository(product_entity_1.Product);
    const categories = await categoryRepository.save([
        { name: "Electronics", description: "Devices and gadgets", image: "https://picsum.photos/200/300" },
        { name: "Clothing", description: "Fashion and apparel", image: "https://picsum.photos/200/300" },
        { name: "Books", description: "Books and literature", image: "https://picsum.photos/200/300" },
    ]);
    console.log("Categories seeded:", categories);
    const products = await productRepository.save([
        { name: "Smartphone", description: "Latest model smartphone", price: 699.99, image: "https://picsum.photos/200/300", category: categories[0] },
        { name: "Laptop", description: "High-performance laptop", price: 1299.99, image: "https://picsum.photos/200/300", category: categories[0] },
        { name: "T-shirt", description: "Cotton T-shirt", price: 19.99, image: "https://picsum.photos/200/300", category: categories[1] },
        { name: "Jeans", description: "Denim jeans", price: 49.99, image: "https://picsum.photos/200/300", category: categories[1] },
        { name: "Fiction Book", description: "Bestselling fiction book", price: 14.99, image: "https://picsum.photos/200/300", category: categories[2] },
        { name: "Textbook", description: "Educational textbook", price: 39.99, image: "https://picsum.photos/200/300", category: categories[2] },
    ]);
    console.log("Products seeded:", products);
    await dataSource.destroy();
    console.log("Database connection closed.");
}
seedDatabase().catch((error) => console.error("Error seeding database:", error));
//# sourceMappingURL=seeder.js.map