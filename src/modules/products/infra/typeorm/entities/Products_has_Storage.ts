import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Products_has_Storage")
class Products_has_Storage {

    @PrimaryGeneratedColumn()
    idProducts_has_Storage!: number;

    @Column()
    Products_idProducts!: number;

    @Column()
    Storage_idStorage !: number;

}

export { Products_has_Storage }