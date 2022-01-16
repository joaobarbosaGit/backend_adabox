import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Logs")
class Logs {

    @PrimaryGeneratedColumn()
    idLogs!: number;

}

export { Logs }