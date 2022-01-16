import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Products_has_Products_Atributes")
class Products_has_Products_Atributes {

    @PrimaryGeneratedColumn()
    idProducts_has_Products_Atributes!: number;

    @Column()
    Products_idProducts!: number;

    @Column()
    Products_Atributes_idProducts_Atributes !: number;

}

export { Products_has_Products_Atributes }