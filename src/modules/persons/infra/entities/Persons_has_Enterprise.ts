import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Persons_has_Enterprise")
class Persons_has_Enterprise {

    @PrimaryGeneratedColumn()
    idPersons_has_Enterprise!: number;

    @Column()
    Persons_idPersons!: number;

    @Column()
    Enterprise_idEnterprise !: number;

}

export { Persons_has_Enterprise }