import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

@injectable()
class CreateProductsUseCase{

    constructor(

    @inject("ProductsRepository")
    private productsRepository: IProductsRepository){};

    async execute({
        Name_Products,
        Description,
        Internal_Code,
        Bar_Code,
        Sell_Value,
        Color,
        Photograph
    }: IProductsDTO) : Promise<void> {

        await this.productsRepository.create({
            Name_Products,
            Description,
            Internal_Code,
            Bar_Code,
            Sell_Value,
            Color,
            Photograph
        });
    }
}

export { CreateProductsUseCase };