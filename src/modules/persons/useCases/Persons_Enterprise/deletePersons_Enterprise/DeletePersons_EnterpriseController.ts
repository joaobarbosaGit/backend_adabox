import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePersons_has_EnterpriseUseCase } from "./DeletePersons_EnterpriseUseCase";


class DeletePersons_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deletePersons_has_EnterpriseUseCase = container.resolve(DeletePersons_has_EnterpriseUseCase);

        const resposta = await deletePersons_has_EnterpriseUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeletePersons_has_EnterpriseController };