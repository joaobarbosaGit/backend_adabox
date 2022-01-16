import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_Products_AtributesRepository } from "@modules/products/repositories/IProducts_has_Products_AtributesRepository";
import { Products_has_Products_Atributes } from "@modules/products/infra/typeorm/entities/Products_has_Products_Atributes";

@injectable()
class FindOneProducts_has_Products_AtributesUseCase{

    constructor(

    @inject("Products_has_Products_AtributesRepository")
    private Products_has_Products_AtributesRepository: IProducts_has_Products_AtributesRepository){};

    async execute(idProducts_has_Products_Atributes: number) : Promise< Products_has_Products_Atributes | AppError> {
        
        const products_has_Products_Atributes = await this.Products_has_Products_AtributesRepository.findById(idProducts_has_Products_Atributes);

        if(!products_has_Products_Atributes){
            throw new AppError("Products_has_Products_Atributes not exists!");
        }

        return products_has_Products_Atributes;
    }
}

export { FindOneProducts_has_Products_AtributesUseCase };