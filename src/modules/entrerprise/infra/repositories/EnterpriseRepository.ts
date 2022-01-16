import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError";

import { IEnterpriseRepository } from "@modules/entrerprise/repositories/IEntrepriseRepository";
import { Enterprise } from "../entities/Enterprise";
import { IEnterpriseDTO } from "@modules/entrerprise/dtos/IEnterpriseDTO";

class EnterpriseRepository implements IEnterpriseRepository {

    private repository: Repository<Enterprise>;

    constructor(){
        this.repository = getRepository(Enterprise);
    }

    async create({ 
        Master_idMaster
    }: IEnterpriseDTO): Promise<void>{
        const enterprise = this.repository.create({
            Master_idMaster
        });
        
        await this.repository.save(enterprise);
    }

    async update({
        idEnterprise,
        Master_idMaster}: IEnterpriseDTO): Promise<void> {

        const enterprise = await this.repository.findOne(idEnterprise);

        if(!enterprise){
            throw new AppError("Enterprise not exists!");
        }

        enterprise.Master_idMaster = Master_idMaster ? Master_idMaster : enterprise.Master_idMaster;
        await this.repository.save(enterprise);
    }

    async findById(idEnterprise: number): Promise<Enterprise> {

        const enterprise = await this.repository.findOne(idEnterprise);

        if(!enterprise){
            throw new AppError("Enterprise not exists!");
        }

        return enterprise;
    }

    async delete(idEnterprise: number): Promise<void> {

        await this.repository.delete(idEnterprise);

    }
}

export { EnterpriseRepository };