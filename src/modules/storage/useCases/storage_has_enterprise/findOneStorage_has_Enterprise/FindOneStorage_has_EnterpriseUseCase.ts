import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IStorage_has_EnterpriseRepository } from "@modules/storage/repositories/IStorage_has_EnterpriseRepository";
import { Storage_has_Enterprise } from "@modules/storage/infra/entities/Storage_has_Enterprise";

@injectable()
class FindOneStorage_has_EnterpriseUseCase{

    constructor(

    @inject("Storage_has_EnterpriseRepository")
    private Storage_has_EnterpriseRepository: IStorage_has_EnterpriseRepository){};

    async execute(idStorage_has_Enterprise: number) : Promise< Storage_has_Enterprise | AppError> {
        
        const storage_has_enterprise = await this.Storage_has_EnterpriseRepository.findById(idStorage_has_Enterprise);

        if(!storage_has_enterprise){
            throw new AppError("Storage_has_Enterprise not exists!");
        }

        return storage_has_enterprise;
    }
}

export { FindOneStorage_has_EnterpriseUseCase };