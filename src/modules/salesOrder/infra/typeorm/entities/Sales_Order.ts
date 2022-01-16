import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Sales_Order")
class Sales_Order {

    @PrimaryGeneratedColumn()
    idSales_Order!: number;

    @CreateDateColumn()
    Created_at!: Date;

    @Column()
    Value!: number;

    @Column()
    Id_Seller !: number;

    @Column()
    Id_Client!: number;

    @Column()
    Observations !: string;
    
    @Column()
    Enterprise_idEnterprise !: number;
    
    @Column()
    Types_Sales_idTypes_Sales !: number;
    
    
    
}

export { Sales_Order }