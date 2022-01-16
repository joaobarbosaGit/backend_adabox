import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Storage")
class Storage {

    @PrimaryGeneratedColumn()
    idStorage!: number;

}

export { Storage }