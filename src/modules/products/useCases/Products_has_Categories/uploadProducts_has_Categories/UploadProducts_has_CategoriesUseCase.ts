import { inject, injectable } from "tsyringe";

import { IProducts_has_CategoriesDTO } from "@modules/products/dtos/IProducts_has_CategoriesDTO";
import { IProducts_has_CategoriesRepository } from "@modules/products/repositories/IProducts_has_CategoriesRepository";

@injectable()
class UpdateProducts_has_CategoriesUseCase{

    constructor(

    @inject("Products_has_CategoriesRepository")
    private products_has_CategoriesRepository: IProducts_has_CategoriesRepository){};

    async execute({
        idProducts_has_Categories,
        Products_idProducts,
        Categories_idCategories
    }: IProducts_has_CategoriesDTO) : Promise<void> {

        await this.products_has_CategoriesRepository.update({
            idProducts_has_Categories,
            Products_idProducts,
            Categories_idCategories
        });
    }
}

export { UpdateProducts_has_CategoriesUseCase };