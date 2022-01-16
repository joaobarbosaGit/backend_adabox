import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProducts_has_CategoriesUseCase } from "./UploadProducts_has_CategoriesUseCase";

class UpdateProducts_has_CategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idProducts_has_Categories,
            Products_idProducts,
            Categories_idCategories
         } = request.body;

        const updateProducts_has_CategoriesUseCase = container.resolve(UpdateProducts_has_CategoriesUseCase);

        await updateProducts_has_CategoriesUseCase.execute({
            idProducts_has_Categories,
            Products_idProducts,
            Categories_idCategories
        });

        return response.status(200).send();
    }

}

export { UpdateProducts_has_CategoriesController };