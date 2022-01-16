import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Persons_Location")
class Persons_Location {

    @PrimaryGeneratedColumn()
    idPersons_Location!: number;

    @Column()
    Address!: string;

    @Column()
    CEP !: string;

    @Column()
    District!: string;

    @Column()
    Number !: string;

    @Column()
    Longitude_Latitude!: string;

    @Column()
    City !: string;
    
}

export { Persons_Location }