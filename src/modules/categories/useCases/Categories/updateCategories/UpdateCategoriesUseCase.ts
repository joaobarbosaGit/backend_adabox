import { inject, injectable } from "tsyringe";

import { ICategoriesDTO } from "@modules/categories/dtos/CategoriesDTO";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";

@injectable()
class UpdateCategoriesUseCase{

    constructor(

    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){};

    async execute({
        idCategories,
        Name_Category
    }: ICategoriesDTO) : Promise<void> {

        await this.categoriesRepository.update({
            idCategories,
            Name_Category
        });
    }
}

export { UpdateCategoriesUseCase };