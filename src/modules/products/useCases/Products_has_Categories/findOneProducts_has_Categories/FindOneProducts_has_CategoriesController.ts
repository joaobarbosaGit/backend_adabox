import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneProducts_has_CategoriesUseCase } from "./FindOneProducts_has_CategoriesUseCase";

class FindOneProducts_has_CategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneProducts_has_CategoriesUseCase = container.resolve(FindOneProducts_has_CategoriesUseCase);

        const products_has_Categories = await findOneProducts_has_CategoriesUseCase.execute(Number.parseInt(id));

        if(products_has_Categories instanceof AppError){
            return response.status(400).json(products_has_Categories.message).send();
        }

        return response.status(200).json(products_has_Categories).send();
    }

}

export { FindOneProducts_has_CategoriesController };