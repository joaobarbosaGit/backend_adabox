import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Persons_has_Persons_Location")
class Persons_has_Persons_Location {

    @PrimaryGeneratedColumn()
    idPersons_has_Persons_Location!: number;

    @Column()
    Persons_idPersons!: number;

    @Column()
    Persons_Location_idPersons_Location !: number;

}

export { Persons_has_Persons_Location }