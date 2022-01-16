import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Products_has_Categories")
class Products_has_Categories {

    @PrimaryGeneratedColumn()
    idProducts_has_Categories!: number;

    @Column()
    Products_idProducts!: number;

    @Column()
    Categories_idCategories !: number;

}

export { Products_has_Categories }