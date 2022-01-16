import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { Categories } from "@modules/categories/infra/typeorm/entities/Categories";

@injectable()
class FindOneCategoriesUseCase{

    constructor(

    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){};

    async execute(idCategories: number) : Promise< Categories | AppError> {
        
        const person = await this.categoriesRepository.findById(idCategories);

        if(!person){
            throw new AppError("Categories not exists!");
        }

        return person;
    }
}

export { FindOneCategoriesUseCase };