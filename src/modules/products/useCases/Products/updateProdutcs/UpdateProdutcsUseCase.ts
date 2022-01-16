import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

@injectable()
class UpdateProductsUseCase{

    constructor(

    @inject("ProductsRepository")
    private productsRepository: IProductsRepository){};

    async execute({
        idProducts,
        Name_Products,
        Description,
        Internal_Code,
        Bar_Code,
        Sell_Value,
        Color,
        Photograph
    }: IProductsDTO) : Promise<void> {

        await this.productsRepository.update({
            idProducts,
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

export { UpdateProductsUseCase };