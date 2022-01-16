import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_Products_AtributesRepository } from "@modules/products/repositories/IProducts_has_Products_AtributesRepository";

@injectable()
class DeleteProducts_has_Products_AtributesUseCase{

    constructor(

    @inject("Products_has_Products_AtributesRepository")
    private Products_has_Products_AtributesRepository: IProducts_has_Products_AtributesRepository){};

    async execute(idProducts_has_Products_Atributes: number) : Promise<void | AppError> {
        
        const person = await this.Products_has_Products_AtributesRepository.findById(idProducts_has_Products_Atributes);

        if(!person){
            throw new AppError("Products_has_Products_Atributes not exists!");
        }

        await this.Products_has_Products_AtributesRepository.delete(idProducts_has_Products_Atributes);
    }
}

export { DeleteProducts_has_Products_AtributesUseCase };