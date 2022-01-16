import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_CategoriesRepository } from "@modules/products/repositories/IProducts_has_CategoriesRepository";
import { Products_has_Categories } from "@modules/products/infra/typeorm/entities/Products_has_Categories";

@injectable()
class FindOneProducts_has_CategoriesUseCase{

    constructor(

    @inject("Products_has_CategoriesRepository")
    private Products_has_CategoriesRepository: IProducts_has_CategoriesRepository){};

    async execute(idProducts_has_Categories: number) : Promise< Products_has_Categories | AppError> {
        
        const products_has_Categories = await this.Products_has_CategoriesRepository.findById(idProducts_has_Categories);

        if(!products_has_Categories){
            throw new AppError("Products_has_Categories not exists!");
        }

        return products_has_Categories;
    }
}

export { FindOneProducts_has_CategoriesUseCase };