import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { FindOnePersons_has_Persons_LocationUseCase } from "./FindOnePersons_has_Persons_LocationUseCase";

class FindOnePersons_has_Persons_LocationController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOnePersons_has_Persons_LocationUseCase = container.resolve(FindOnePersons_has_Persons_LocationUseCase);

        const persons_has_Persons_Location = await findOnePersons_has_Persons_LocationUseCase.execute(Number.parseInt(id));

        if(persons_has_Persons_Location instanceof AppError){
            return response.status(400).json(persons_has_Persons_Location.message).send();
        }

        return response.status(200).json(persons_has_Persons_Location).send();
    }

}

export { FindOnePersons_has_Persons_LocationController };