import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
@Entity("Profile")
class Profile {

    @PrimaryGeneratedColumn()
    idProfile!: number;

}

export { Profile }