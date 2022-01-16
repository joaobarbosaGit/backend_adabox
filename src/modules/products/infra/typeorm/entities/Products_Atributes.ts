import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Products_Atributes")
class Products_Atributes {

    @PrimaryGeneratedColumn()
    idProducts_Atributes!: number;

    @Column()
    Weight!: number;

    @Column()
    Width!: number;

    @Column()
    Height!: number;

    @Column()
    Length!: number;

    @Column()
    Types_Sales_idTypes_Sales!: number;

}

export { Products_Atributes }