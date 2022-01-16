import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Categories")
class Categories {

    @PrimaryGeneratedColumn()
    idCategories!: number;

    @Column()
    Name_Category!: string;
    
}

export { Categories }