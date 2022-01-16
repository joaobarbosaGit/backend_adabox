import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOnePersons_has_MasterUseCase } from "./FindOnePersons_has_MasterUseCase";

class FindOnePersons_has_MasterController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOnePersons_has_MasterUseCase = container.resolve(FindOnePersons_has_MasterUseCase);

        const persons_has_Master = await findOnePersons_has_MasterUseCase.execute(Number.parseInt(id));

        if(persons_has_Master instanceof AppError){
            return response.status(400).json(persons_has_Master.message).send();
        }

        return response.status(200).json(persons_has_Master).send();
    }

}

export { FindOnePersons_has_MasterController };