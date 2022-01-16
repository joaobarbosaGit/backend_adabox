import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Master")
class Master {

    @PrimaryGeneratedColumn()
    idMaster!: number;

}

export { Master }