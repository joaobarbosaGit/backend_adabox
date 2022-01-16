import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneStorage_has_EnterpriseUseCase } from "./FindOneStorage_has_EnterpriseUseCase";

class FindOneStorage_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneStorage_has_EnterpriseUseCase = container.resolve(FindOneStorage_has_EnterpriseUseCase);

        const storage_has_Enterprise = await findOneStorage_has_EnterpriseUseCase.execute(Number.parseInt(id));

        if(storage_has_Enterprise instanceof AppError){
            return response.status(400).json(storage_has_Enterprise.message).send();
        }

        return response.status(200).json(storage_has_Enterprise).send();
    }

}

export { FindOneStorage_has_EnterpriseController };