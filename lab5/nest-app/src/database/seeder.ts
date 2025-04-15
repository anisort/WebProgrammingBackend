import { DataSource } from "typeorm";
import { Category } from "../categories/entities/category.entity";
import { Product } from "../products/entities/product.entity";

const dataSource = new DataSource({
    // type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "1234",
    // database: "nest-app",

    type: 'postgres',
    host: 'pg',
    port: 5432,
    username: 'pguser',
    password: 'password',
    database: 'nestjs',
    
    entities: [Category, Product],
    synchronize: true,
});

async function seedDatabase() {
    await dataSource.initialize();
    console.log("Database connection established.");

    const categoryRepository = dataSource.getRepository(Category);
    const productRepository = dataSource.getRepository(Product);

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
