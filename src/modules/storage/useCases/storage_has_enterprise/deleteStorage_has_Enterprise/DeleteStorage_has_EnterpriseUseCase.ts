import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IStorage_has_EnterpriseRepository } from "@modules/storage/repositories/IStorage_has_EnterpriseRepository";

@injectable()
class DeleteStorage_has_EnterpriseUseCase{

    constructor(

    @inject("Storage_has_EnterpriseRepository")
    private storage_has_EnterpriseRepository: IStorage_has_EnterpriseRepository){};

    async execute(idStorage_has_Enterprise: number) : Promise<void | AppError> {
        
        const person = await this.storage_has_EnterpriseRepository.findById(idStorage_has_Enterprise);

        if(!person){
            throw new AppError("Storage_has_Enterprise not exists!");
        }

        await this.storage_has_EnterpriseRepository.delete(idStorage_has_Enterprise);
    }
}

export { DeleteStorage_has_EnterpriseUseCase };