import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneCategoriesUseCase } from "./FindOneCategoriesUseCase";

class FindOneCategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneCategoriesUseCase = container.resolve(FindOneCategoriesUseCase);

        const categories = await findOneCategoriesUseCase.execute(Number.parseInt(id));

        if(categories instanceof AppError){
            return response.status(400).json(categories.message).send();
        }

        return response.status(200).json(categories).send();
    }

}

export { FindOneCategoriesController };