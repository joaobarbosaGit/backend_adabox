import { inject, injectable } from "tsyringe";

import { IProducts_has_StorageDTO } from "@modules/products/dtos/Products_has_StorageDTO";
import { IProducts_has_StorageRepository } from "@modules/products/repositories/IProducts_has_StorageRepository";

@injectable()
class UpdateProducts_has_StorageUseCase{

    constructor(

    @inject("Products_has_StorageRepository")
    private products_has_StorageRepository: IProducts_has_StorageRepository){};

    async execute({
        idProducts_has_Storage,
        Products_idProducts,
        Storage_idStorage
    }: IProducts_has_StorageDTO) : Promise<void> {

        await this.products_has_StorageRepository.update({
            idProducts_has_Storage,
            Products_idProducts,
            Storage_idStorage
        });
    }
}

export { UpdateProducts_has_StorageUseCase };