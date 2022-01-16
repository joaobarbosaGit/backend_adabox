import { inject, injectable } from "tsyringe";

import { Categories } from "@modules/categories/infra/typeorm/entities/Categories";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";

@injectable()
class FindAllCategoriesUseCase{

    constructor(

    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){};

    async execute() : Promise< Categories []> {

       const Categories = await this.categoriesRepository.findAll();

       return Categories;
    }
}

export { FindAllCategoriesUseCase };