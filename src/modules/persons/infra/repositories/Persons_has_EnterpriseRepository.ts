import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 

import { IPersons_has_EnterpriseRepository } from "@modules/persons/repositories/IPersons_has_EnterpriseRepository";
import { Persons_has_Enterprise } from "../entities/Persons_has_Enterprise";
import { IPersons_has_EnterpriseDTO } from "@modules/persons/dtos/IPersons_EnterpriseDTO";

class Persons_has_EnterpriseRepository implements IPersons_has_EnterpriseRepository {

    private repository: Repository<Persons_has_Enterprise>;

    constructor(){
        this.repository = getRepository(Persons_has_Enterprise);
    }

    async create({ 
        Persons_idPersons,
        Enterprise_idEnterprise
    }: IPersons_has_EnterpriseDTO): Promise<void>{
        const person_has_enterprise = this.repository.create({
            Persons_idPersons,
            Enterprise_idEnterprise
        });
        
        await this.repository.save(person_has_enterprise);
    }

    async update({
        idPersons_has_Enterprise,
        Persons_idPersons,
        Enterprise_idEnterprise
    }: IPersons_has_EnterpriseDTO): Promise<void> {

        const person_has_enterprise = await this.repository.findOne(idPersons_has_Enterprise);

        if(!person_has_enterprise){
            throw new AppError("Persons_has_Enterprise not exists!");
        }

        person_has_enterprise.Persons_idPersons = Persons_idPersons ? Persons_idPersons : person_has_enterprise.Persons_idPersons;
        person_has_enterprise.Enterprise_idEnterprise = Enterprise_idEnterprise ? Enterprise_idEnterprise : person_has_enterprise.Enterprise_idEnterprise;

        await this.repository.save(person_has_enterprise);
    }

    async findById(idPersons_has_Enterprise: number): Promise<Persons_has_Enterprise> {

        const person_has_enterprise = await this.repository.findOne(idPersons_has_Enterprise);

        if(!person_has_enterprise){
            throw new AppError("Persons_has_Enterprise not exists!");
        }

        return person_has_enterprise;
    }

    async delete(idPersons_has_Enterprise: number): Promise<void> {

        await this.repository.delete(idPersons_has_Enterprise);

    }
}

export { Persons_has_EnterpriseRepository };