import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Storage_has_Enterprise")
class Storage_has_Enterprise {

    @PrimaryGeneratedColumn()
    idStorage_has_Enterprise!: number;

    @Column()
    Storage_idStorage!: number;

    @Column()
    Enterprise_idEnterprise !: number;

}

export { Storage_has_Enterprise }