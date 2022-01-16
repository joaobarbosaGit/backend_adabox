import { inject, injectable } from "tsyringe";

import { Products } from "@modules/products/infra/typeorm/entities/Products";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

@injectable()
class FindAllProductsUseCase{

    constructor(

    @inject("ProductsRepository")
    private ProductsRepository: IProductsRepository){};

    async execute() : Promise< Products []> {

       const products = await this.ProductsRepository.findAll();

       return products;
    }
}

export { FindAllProductsUseCase };