import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Sales_Order_has_Products")
class Sales_Order_has_Products {

    @PrimaryGeneratedColumn()
    idSales_Order_has_Products!: number;

    @Column()
    Sales_Order_idSales_Order!: number;

    @Column()
    Products_idProducts !: number;

}

export { Sales_Order_has_Products }