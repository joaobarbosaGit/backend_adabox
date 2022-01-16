import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePersonsUseCase } from "./DeletePersonsUseCase";

class DeletePersonsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deletePersonsUseCase = container.resolve(DeletePersonsUseCase);

        const resposta = await deletePersonsUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeletePersonsController };