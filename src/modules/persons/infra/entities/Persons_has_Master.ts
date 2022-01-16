import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Persons_has_Master")
class Persons_has_Master {

    @PrimaryGeneratedColumn()
    idPersons_has_Master!: number;

    @Column()
    Persons_idPersons!: number;

    @Column()
    Master_idMaster !: number;

}

export { Persons_has_Master }