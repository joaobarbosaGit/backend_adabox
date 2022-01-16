import { inject, injectable } from "tsyringe";

import { IProducts_has_Cost_ValueDTO } from "@modules/products/dtos/IProducts_has_Const_ValueDTO";
import { IProducts_has_Cost_ValueRepository } from "@modules/products/repositories/IProducts_has_Cost_ValueRepository";

@injectable()
class CreateProducts_has_Cost_ValueUseCase{

    constructor(

    @inject("Products_has_Cost_ValueRepository")
    private products_has_Cost_ValueRepository: IProducts_has_Cost_ValueRepository){};

    async execute({
        Products_idProducts,
        Cost_Value_idCost_Value
    }: IProducts_has_Cost_ValueDTO) : Promise<void> {

        await this.products_has_Cost_ValueRepository.create({
            Products_idProducts,
            Cost_Value_idCost_Value
        });
    }
}

export { CreateProducts_has_Cost_ValueUseCase };