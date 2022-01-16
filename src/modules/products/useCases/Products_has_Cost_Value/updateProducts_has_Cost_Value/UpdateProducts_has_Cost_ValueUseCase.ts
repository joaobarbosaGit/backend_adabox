import { inject, injectable } from "tsyringe";

import { IProducts_has_Cost_ValueRepository } from "@modules/products/repositories/IProducts_has_Cost_ValueRepository";
import { IProducts_has_Cost_ValueDTO } from "@modules/products/dtos/IProducts_has_Const_ValueDTO";

@injectable()
class UpdateProducts_has_Cost_ValueUseCase{

    constructor(

    @inject("Products_has_Cost_ValueRepository")
    private products_has_Cost_ValueRepository: IProducts_has_Cost_ValueRepository){};

    async execute({
        idProducts_has_Cost_Value,
        Products_idProducts,
        Cost_Value_idCost_Value
    }: IProducts_has_Cost_ValueDTO) : Promise<void> {

        await this.products_has_Cost_ValueRepository.update({
            idProducts_has_Cost_Value,
            Products_idProducts,
            Cost_Value_idCost_Value
        });
    }
}

export { UpdateProducts_has_Cost_ValueUseCase };