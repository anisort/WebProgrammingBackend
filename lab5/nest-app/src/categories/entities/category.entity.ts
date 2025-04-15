import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity("categories")
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text", {nullable: true})
    description?: string;

    @Column()
    image: string;

    @CreateDateColumn({type: "timestamp"})
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" }) 
    update_at: Date;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
