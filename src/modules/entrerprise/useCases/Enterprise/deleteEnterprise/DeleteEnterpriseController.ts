import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteEnterpriseUseCase } from "./DeleteEntrepriseUseCase";

class DeleteEnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteEnterpriseUseCase = container.resolve(DeleteEnterpriseUseCase);

        const resposta = await deleteEnterpriseUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteEnterpriseController };