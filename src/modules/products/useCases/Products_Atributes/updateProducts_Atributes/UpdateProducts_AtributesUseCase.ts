import { inject, injectable } from "tsyringe";

import { IProducts_AtributesDTO } from "@modules/products/dtos/IProducts_AtributesDTO";
import { IProducts_AtributesRepository } from "@modules/products/repositories/IProducts_AtributesRepository";

@injectable()
class UpdateProducts_AtributesUseCase{

    constructor(

    @inject("Products_AtributesRepository")
    private products_AtributesRepository: IProducts_AtributesRepository){};

    async execute({
        idProducts_Atributes,
        Weight,
        Width,
        Height,
        Length,
        Types_Sales_idTypes_Sales
    }: IProducts_AtributesDTO) : Promise<void> {

        await this.products_AtributesRepository.update({
            idProducts_Atributes,
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        });
    }
}

export { UpdateProducts_AtributesUseCase };