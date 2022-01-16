import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProducts_has_CategoriesUseCase } from "./CreateProducts_has_CategoriesUseCase";

class CreateProducts_has_CategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Products_idProducts,
            Categories_idCategories
        } = request.body;

        const createProducts_has_CategoriesUseCase = container.resolve(CreateProducts_has_CategoriesUseCase);

        await createProducts_has_CategoriesUseCase.execute({
            Products_idProducts,
            Categories_idCategories
        });

        return response.status(201).send();
    }

}

export { CreateProducts_has_CategoriesController };