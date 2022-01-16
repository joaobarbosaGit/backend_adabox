import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePersons_LocationUseCase } from "./DeletePersons_LocationUseCase";


class DeletePersons_LocationController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deletePersons_LocationUseCase = container.resolve(DeletePersons_LocationUseCase);

        const resposta = await deletePersons_LocationUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeletePersons_LocationController };