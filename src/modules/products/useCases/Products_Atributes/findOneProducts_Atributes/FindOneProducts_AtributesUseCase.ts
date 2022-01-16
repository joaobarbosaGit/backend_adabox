import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError"; 
import { IProducts_AtributesRepository } from "@modules/products/repositories/IProducts_AtributesRepository";
import { Products_Atributes } from "@modules/products/infra/typeorm/entities/Products_Atributes";

@injectable()
class FindOneProducts_AtributesUseCase{

    constructor(

    @inject("Products_AtributesRepository")
    private Products_AtributesRepository: IProducts_AtributesRepository){};

    async execute(idProducts_Atributes: number) : Promise< Products_Atributes | AppError> {
        
        const products_atributes = await this.Products_AtributesRepository.findById(idProducts_Atributes);

        if(!products_atributes){
            throw new AppError("Products_Atributes not exists!");
        }

        return products_atributes;
    }
}

export { FindOneProducts_AtributesUseCase };