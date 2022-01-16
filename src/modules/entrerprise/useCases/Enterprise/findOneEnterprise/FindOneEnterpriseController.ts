import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneEnterpriseUseCase } from "./FindOneEnterpriseUseCase";


class FindOneEnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneEnterpriseUseCase = container.resolve(FindOneEnterpriseUseCase);

        const enterprise = await findOneEnterpriseUseCase.execute(Number.parseInt(id));

        if(enterprise instanceof AppError){
            return response.status(400).json(enterprise.message).send();
        }

        return response.status(200).json(enterprise).send();
    }

}

export { FindOneEnterpriseController };