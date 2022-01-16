import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";

@injectable()
class DeleteCategoriesUseCase{

    constructor(

    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){};

    async execute(idCategories: number) : Promise<void | AppError> {

        await this.categoriesRepository.delete(idCategories);
    }
}

export { DeleteCategoriesUseCase };