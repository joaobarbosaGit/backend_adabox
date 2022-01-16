import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteProductsUseCase } from "./DeleteProdutcsUseCase";

class DeleteProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteProductsUseCase = container.resolve(DeleteProductsUseCase);

        const resposta = await deleteProductsUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteProductsController };