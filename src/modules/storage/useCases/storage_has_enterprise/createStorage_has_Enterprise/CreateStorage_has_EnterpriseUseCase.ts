import { inject, injectable } from "tsyringe";

import { IStorage_has_EnterpriseDTO } from "@modules/storage/dtos/IStorage_has_EnterpriseDTO";
import { IStorage_has_EnterpriseRepository } from "@modules/storage/repositories/IStorage_has_EnterpriseRepository";

@injectable()
class CreateStorage_has_EnterpriseUseCase{

    constructor(

    @inject("Storage_has_EnterpriseRepository")
    private storage_has_EnterpriseRepository: IStorage_has_EnterpriseRepository){};

    async execute({
        Storage_idStorage,
        Enterprise_idEnterprise
    }: IStorage_has_EnterpriseDTO) : Promise<void> {

        await this.storage_has_EnterpriseRepository.create({
            Storage_idStorage,
            Enterprise_idEnterprise
        });
    }
}

export { CreateStorage_has_EnterpriseUseCase };