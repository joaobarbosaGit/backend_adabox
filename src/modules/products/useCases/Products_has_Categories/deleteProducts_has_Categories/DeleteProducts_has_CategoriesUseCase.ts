import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_CategoriesRepository } from "@modules/products/repositories/IProducts_has_CategoriesRepository";

@injectable()
class DeleteProducts_has_CategoriesUseCase{

    constructor(

    @inject("Products_has_CategoriesRepository")
    private Products_has_CategoriesRepository: IProducts_has_CategoriesRepository){};

    async execute(idProducts_has_Categories: number) : Promise<void | AppError> {
        
        const person = await this.Products_has_CategoriesRepository.findById(idProducts_has_Categories);

        if(!person){
            throw new AppError("Products_has_Categories not exists!");
        }

        await this.Products_has_CategoriesRepository.delete(idProducts_has_Categories);
    }
}

export { DeleteProducts_has_CategoriesUseCase };