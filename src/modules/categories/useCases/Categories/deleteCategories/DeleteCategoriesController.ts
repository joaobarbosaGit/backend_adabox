import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteCategoriesUseCase } from "./DeleteCategoriesUseCase";

class DeleteCategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteCategoriesUseCase = container.resolve(DeleteCategoriesUseCase);

        const resposta = await deleteCategoriesUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteCategoriesController };