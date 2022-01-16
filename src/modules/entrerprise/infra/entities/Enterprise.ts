import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Enterprise")
class Enterprise {

    @PrimaryGeneratedColumn()
    idEnterprise!: number;

    @Column()
    Master_idMaster!: number;

}

export { Enterprise }