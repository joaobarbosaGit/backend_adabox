import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_StorageRepository } from "@modules/products/repositories/IProducts_has_StorageRepository";
import { Products_has_Storage } from "@modules/products/infra/typeorm/entities/Products_has_Storage";

@injectable()
class FindOneProducts_has_StorageUseCase{

    constructor(

    @inject("Products_has_StorageRepository")
    private Products_has_StorageRepository: IProducts_has_StorageRepository){};

    async execute(idProducts_has_Storage: number) : Promise< Products_has_Storage | AppError> {
        
        const products_has_Storage = await this.Products_has_StorageRepository.findById(idProducts_has_Storage);

        if(!products_has_Storage){
            throw new AppError("Products_has_Storage not exists!");
        }

        return products_has_Storage;
    }
}

export { FindOneProducts_has_StorageUseCase };