import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Persons")
class Persons {

    @PrimaryGeneratedColumn()
    idPersons!: number;

    @Column()
    Name!: string;

    @Column()
    Email !: string;

    @Column()
    Password!: string;

    @Column()
    Telephone_Number !: string;

    @Column()
    RG!: string;

    @Column()
    CPF !: string;
    
    @Column()
    Profile_idProfile !: string;
    
}

export { Persons }