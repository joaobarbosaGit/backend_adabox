import { inject, injectable } from "tsyringe";

import { IProducts_AtributesDTO } from "@modules/products/dtos/IProducts_AtributesDTO";
import { IProducts_AtributesRepository } from "@modules/products/repositories/IProducts_AtributesRepository";

@injectable()
class CreateProducts_AtributesUseCase{

    constructor(

    @inject("Products_AtributesRepository")
    private products_AtributesRepository: IProducts_AtributesRepository){};

    async execute({
        Weight,
        Width,
        Height,
        Length,
        Types_Sales_idTypes_Sales
    }: IProducts_AtributesDTO) : Promise<void> {

        await this.products_AtributesRepository.create({
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        });
    }
}

export { CreateProducts_AtributesUseCase };