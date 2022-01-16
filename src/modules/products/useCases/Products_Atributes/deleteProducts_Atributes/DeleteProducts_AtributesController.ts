import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteProducts_AtributesUseCase } from "./DeleteProducts_AtributesUseCase";

class DeleteProducts_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteProducts_AtributesUseCase = container.resolve(DeleteProducts_AtributesUseCase);

        const resposta = await deleteProducts_AtributesUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteProducts_AtributesController };