import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCategoriesUseCase } from "./UpdateCategoriesUseCase";

class UpdateCategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idCategories,
            Name_Category
        } = request.body;

        const updateCategoriesUseCase = container.resolve(UpdateCategoriesUseCase);

        await updateCategoriesUseCase.execute({
            idCategories,
            Name_Category
        });

        return response.status(200).send();
    }

}

export { UpdateCategoriesController };