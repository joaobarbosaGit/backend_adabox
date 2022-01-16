import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

class CreateCategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { Name_Category } = request.body;

        const createCategoriesUseCase = container.resolve(CreateCategoriesUseCase);

        await createCategoriesUseCase.execute({ Name_Category });

        return response.status(201).send();
    }

}

export { CreateCategoriesController };