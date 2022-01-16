import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

@injectable()
class DeleteProductsUseCase{

    constructor(

    @inject("ProductsRepository")
    private productsRepository: IProductsRepository){};

    async execute(idProducts: number) : Promise<void | AppError> {

        await this.productsRepository.delete(idProducts);
    }
}

export { DeleteProductsUseCase };