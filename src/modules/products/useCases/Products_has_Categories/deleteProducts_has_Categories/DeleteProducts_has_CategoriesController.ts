import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteProducts_has_CategoriesUseCase } from "./DeleteProducts_has_CategoriesUseCase";

class DeleteProducts_has_CategoriesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteProducts_has_CategoriesUseCase = container.resolve(DeleteProducts_has_CategoriesUseCase);

        const resposta = await deleteProducts_has_CategoriesUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteProducts_has_CategoriesController };