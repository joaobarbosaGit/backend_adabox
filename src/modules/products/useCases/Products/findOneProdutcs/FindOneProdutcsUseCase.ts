import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError"; 
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Products } from "@modules/products/infra/typeorm/entities/Products";

@injectable()
class FindOneProductsUseCase{

    constructor(

    @inject("ProductsRepository")
    private ProductsRepository: IProductsRepository){};

    async execute(idProducts: number) : Promise< Products | AppError> {
        
        const products = await this.ProductsRepository.findById(idProducts);

        if(!products){
            throw new AppError("Products not exists!");
        }

        return products;
    }
}

export { FindOneProductsUseCase };