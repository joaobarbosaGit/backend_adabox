import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Products_has_Cost_Value")
class Products_has_Cost_Value {

    @PrimaryGeneratedColumn()
    idProducts_has_Cost_Value!: number;

    @Column()
    Products_idProducts!: number;

    @Column()
    Cost_Value_idCost_Value !: number;

}

export { Products_has_Cost_Value }