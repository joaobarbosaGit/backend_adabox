import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOnePersons_has_EnterpriseUseCase } from "./FindOnePersons_EnterpriseUseCase";

class FindOnePersons_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOnePersons_has_EnterpriseUseCase = container.resolve(FindOnePersons_has_EnterpriseUseCase);

        const persons_has_Enterprise = await findOnePersons_has_EnterpriseUseCase.execute(Number.parseInt(id));

        if(persons_has_Enterprise instanceof AppError){
            return response.status(400).json(persons_has_Enterprise.message).send();
        }

        return response.status(200).json(persons_has_Enterprise).send();
    }

}

export { FindOnePersons_has_EnterpriseController };