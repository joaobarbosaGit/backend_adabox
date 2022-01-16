import { inject, injectable } from "tsyringe";

import { ICategoriesDTO } from "@modules/categories/dtos/CategoriesDTO";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";

@injectable()
class CreateCategoriesUseCase{

    constructor(

    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){};

    async execute({
        Name_Category
    }: ICategoriesDTO) : Promise<void> {

        await this.categoriesRepository.create({
            Name_Category
        });
    }
}

export { CreateCategoriesUseCase };