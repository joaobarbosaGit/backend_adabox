import { inject, injectable } from "tsyringe";

import { IProducts_has_StorageRepository } from "@modules/products/repositories/IProducts_has_StorageRepository";
import { IProducts_has_StorageDTO } from "@modules/products/dtos/Products_has_StorageDTO";

@injectable()
class CreateProducts_has_StorageUseCase{

    constructor(

    @inject("Products_has_StorageRepository")
    private products_has_StorageRepository: IProducts_has_StorageRepository){};

    async execute({
        Products_idProducts,
        Storage_idStorage
    }: IProducts_has_StorageDTO) : Promise<void> {

        await this.products_has_StorageRepository.create({
            Products_idProducts,
            Storage_idStorage
        });
    }
}

export { CreateProducts_has_StorageUseCase };