import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Products")
class Products {

    @PrimaryGeneratedColumn()
    idProducts!: number;

    @Column()
    Name_Products!: string;

    @Column()
    Description!: string;

    @Column()
    Internal_Code!: string;

    @Column()
    Bar_Code!: string;

    @Column()
    Sell_Value!: number;

    @Column()
    Color!: string;

    @Column()
    Photograph!: string;

}

export { Products }