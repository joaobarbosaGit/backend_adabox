import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IPersons_has_Persons_LocationRepository } from "@modules/persons/repositories/IPersons_has_Persons_LocationRepository";
import { Persons_has_Persons_Location } from "../entities/Persons_has_Persons_Location";
import { IPersons_has_Persons_LocationDTO } from "@modules/persons/dtos/IPersons_has_Persons_LocationDTO";


class Persons_has_Persons_LocationRepository implements IPersons_has_Persons_LocationRepository {

    private repository: Repository<Persons_has_Persons_Location>;

    constructor(){
        this.repository = getRepository(Persons_has_Persons_Location);
    }

    async create({ 
        Persons_idPersons,
        Persons_Location_idPersons_Location
    }: IPersons_has_Persons_LocationDTO): Promise<void>{
        const person_has_person_location = this.repository.create({
            Persons_idPersons,
            Persons_Location_idPersons_Location
        });
        
        await this.repository.save(person_has_person_location);
    }

    async update({
        idPersons_has_Persons_Location,
        Persons_idPersons,
        Persons_Location_idPersons_Location
    }: IPersons_has_Persons_LocationDTO): Promise<void> {

        const person_has_person_location = await this.repository.findOne(idPersons_has_Persons_Location);

        if(!person_has_person_location){
            throw new AppError("Persons_has_Persons_Location not exists!");
        }

        person_has_person_location.Persons_idPersons = Persons_idPersons ? Persons_idPersons : person_has_person_location.Persons_idPersons;
        person_has_person_location.Persons_Location_idPersons_Location = Persons_Location_idPersons_Location ? Persons_Location_idPersons_Location : person_has_person_location.Persons_Location_idPersons_Location;

        await this.repository.save(person_has_person_location);
    }

    async findById(idPersons_has_Persons_Location: number): Promise<Persons_has_Persons_Location> {

        const person_has_person_location = await this.repository.findOne(idPersons_has_Persons_Location);

        if(!person_has_person_location){
            throw new AppError("Persons_has_Persons_Location not exists!");
        }

        return person_has_person_location;
    }

    async delete(idPersons_has_Persons_Location: number): Promise<void> {

        await this.repository.delete(idPersons_has_Persons_Location);

    }
}

export { Persons_has_Persons_LocationRepository };