import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";

class FindAllCategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const findAllCategoriesUseCase = container.resolve(FindAllCategoriesUseCase);

        const Categories = await findAllCategoriesUseCase.execute();

        return response.status(200).json(Categories).send();
    }

}

export { FindAllCategoriesController };