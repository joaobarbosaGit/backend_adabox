import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteStorage_has_EnterpriseUseCase } from "./DeleteStorage_has_EnterpriseUseCase";

class DeleteStorage_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteStorage_has_EnterpriseUseCase = container.resolve(DeleteStorage_has_EnterpriseUseCase);

        const resposta = await deleteStorage_has_EnterpriseUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteStorage_has_EnterpriseController };