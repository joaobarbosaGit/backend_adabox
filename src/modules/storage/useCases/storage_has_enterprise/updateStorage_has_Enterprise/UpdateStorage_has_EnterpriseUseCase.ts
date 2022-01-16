import { inject, injectable } from "tsyringe";

import { IStorage_has_EnterpriseDTO } from "@modules/storage/dtos/IStorage_has_EnterpriseDTO";
import { IStorage_has_EnterpriseRepository } from "@modules/storage/repositories/IStorage_has_EnterpriseRepository";

@injectable()
class UpdateStorage_has_EnterpriseUseCase{

    constructor(

    @inject("Storage_has_EnterpriseRepository")
    private Storage_has_EnterpriseRepository: IStorage_has_EnterpriseRepository){};

    async execute({
        idStorage_has_Enterprise,
        Storage_idStorage,
        Enterprise_idEnterprise
    }: IStorage_has_EnterpriseDTO) : Promise<void> {

        await this.Storage_has_EnterpriseRepository.update({
            idStorage_has_Enterprise,
            Storage_idStorage,
            Enterprise_idEnterprise
        });
    }
}

export { UpdateStorage_has_EnterpriseUseCase };