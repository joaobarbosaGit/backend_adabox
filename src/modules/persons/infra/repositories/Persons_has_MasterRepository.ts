import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 

import { IPersons_has_MasterRepository } from "@modules/persons/repositories/IPersons_has_MasterRepository";
import { Persons_has_Master } from "../entities/Persons_has_Master";
import { IPersons_has_MasterDTO } from "@modules/persons/dtos/IPersons_has_MasterDTO";

class Persons_has_MasterRepository implements IPersons_has_MasterRepository {

    private repository: Repository<Persons_has_Master>;

    constructor(){
        this.repository = getRepository(Persons_has_Master);
    }

    async create({ 
        Persons_idPersons,
        Master_idMaster
    }: IPersons_has_MasterDTO): Promise<void>{
        const person_has_Master = this.repository.create({
            Persons_idPersons,
            Master_idMaster
        });
        
        await this.repository.save(person_has_Master);
    }

    async update({
        idPersons_has_Master,
        Persons_idPersons,
        Master_idMaster
    }: IPersons_has_MasterDTO): Promise<void> {

        const person_has_Master = await this.repository.findOne(idPersons_has_Master);

        if(!person_has_Master){
            throw new AppError("Persons_has_Master not exists!");
        }

        person_has_Master.Persons_idPersons = Persons_idPersons ? Persons_idPersons : person_has_Master.Persons_idPersons;
        person_has_Master.Master_idMaster = Master_idMaster ? Master_idMaster : person_has_Master.Master_idMaster;

        await this.repository.save(person_has_Master);
    }

    async findById(idPersons_has_Master: number): Promise<Persons_has_Master> {

        const person_has_Master = await this.repository.findOne(idPersons_has_Master);

        if(!person_has_Master){
            throw new AppError("Persons_has_Master not exists!");
        }

        return person_has_Master;
    }

    async delete(idPersons_has_Master: number): Promise<void> {

        await this.repository.delete(idPersons_has_Master);

    }
}

export { Persons_has_MasterRepository };