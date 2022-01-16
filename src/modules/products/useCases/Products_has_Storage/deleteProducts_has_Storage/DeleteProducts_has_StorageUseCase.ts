import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_StorageRepository } from "@modules/products/repositories/IProducts_has_StorageRepository";

@injectable()
class DeleteProducts_has_StorageUseCase{

    constructor(

    @inject("Products_has_StorageRepository")
    private Products_has_StorageRepository: IProducts_has_StorageRepository){};

    async execute(idProducts_has_Storage: number) : Promise<void | AppError> {
        
        const person = await this.Products_has_StorageRepository.findById(idProducts_has_Storage);

        if(!person){
            throw new AppError("Products_has_Storage not exists!");
        }

        await this.Products_has_StorageRepository.delete(idProducts_has_Storage);
    }
}

export { DeleteProducts_has_StorageUseCase };