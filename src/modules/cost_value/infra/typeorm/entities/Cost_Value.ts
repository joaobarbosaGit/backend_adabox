import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Cost_Value")
class Cost_Value {

    @PrimaryGeneratedColumn()
    idCost_Value!: number;

    @Column()
    Cost_Value!: number;

    @CreateDateColumn()
    Created_at!: Date;

}

export { Cost_Value }