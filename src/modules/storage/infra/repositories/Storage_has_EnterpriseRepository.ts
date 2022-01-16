import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IStorage_has_EnterpriseRepository } from "@modules/storage/repositories/IStorage_has_EnterpriseRepository";
import { Storage_has_Enterprise } from "../entities/Storage_has_Enterprise";
import { IStorage_has_EnterpriseDTO } from "@modules/storage/dtos/IStorage_has_EnterpriseDTO";

class Storage_has_EnterpriseRepository implements IStorage_has_EnterpriseRepository {

    private repository: Repository<Storage_has_Enterprise>;

    constructor(){
        this.repository = getRepository(Storage_has_Enterprise);
    }

    async create({ 
        Storage_idStorage,
        Enterprise_idEnterprise
    }: IStorage_has_EnterpriseDTO): Promise<void>{
        const storage_has_Enterprise = this.repository.create({
            Storage_idStorage,
            Enterprise_idEnterprise
        });
        
        await this.repository.save(storage_has_Enterprise);
    }

    async update({
        idStorage_has_Enterprise,
        Storage_idStorage,
        Enterprise_idEnterprise
    }: IStorage_has_EnterpriseDTO): Promise<void> {

        const storage_has_Enterprise = await this.repository.findOne(idStorage_has_Enterprise);

        if(!storage_has_Enterprise){
            throw new AppError("Storage_has_Enterprise not exists!");
        }

        storage_has_Enterprise.Storage_idStorage = Storage_idStorage ? Storage_idStorage : storage_has_Enterprise.Storage_idStorage;
        storage_has_Enterprise.Enterprise_idEnterprise = Enterprise_idEnterprise ? Enterprise_idEnterprise : storage_has_Enterprise.Enterprise_idEnterprise;

        await this.repository.save(storage_has_Enterprise);
    }

    async findById(idStorage_has_Enterprise: number): Promise<Storage_has_Enterprise> {

        const storage_has_Enterprise = await this.repository.findOne(idStorage_has_Enterprise);

        if(!storage_has_Enterprise){
            throw new AppError("Storage_has_Enterprise not exists!");
        }

        return storage_has_Enterprise;
    }

    async delete(idStorage_has_Enterprise: number): Promise<void> {

        await this.repository.delete(idStorage_has_Enterprise);

    }
}

export { Storage_has_EnterpriseRepository };