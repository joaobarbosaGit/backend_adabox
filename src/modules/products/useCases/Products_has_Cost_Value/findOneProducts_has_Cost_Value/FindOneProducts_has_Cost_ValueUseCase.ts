import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_Cost_ValueRepository } from "@modules/products/repositories/IProducts_has_Cost_ValueRepository";
import { Products_has_Cost_Value } from "@modules/products/infra/typeorm/entities/Products_has_Cost_Value";

@injectable()
class FindOneProducts_has_Cost_ValueUseCase{

    constructor(

    @inject("Products_has_Cost_ValueRepository")
    private Products_has_Cost_ValueRepository: IProducts_has_Cost_ValueRepository){};

    async execute(idProducts_has_Cost_Value: number) : Promise< Products_has_Cost_Value | AppError> {
        
        const products_has_Cost_Value = await this.Products_has_Cost_ValueRepository.findById(idProducts_has_Cost_Value);

        if(!products_has_Cost_Value){
            throw new AppError("Products_has_Cost_Value not exists!");
        }

        return products_has_Cost_Value;
    }
}

export { FindOneProducts_has_Cost_ValueUseCase };