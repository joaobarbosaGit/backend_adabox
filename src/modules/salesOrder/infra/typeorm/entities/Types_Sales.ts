import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Types_Sales")
class Types_Sales {

    @PrimaryGeneratedColumn()
    idTypes_Sales!: number;

    @Column()
    Description!: string;
    
}

export { Types_Sales }