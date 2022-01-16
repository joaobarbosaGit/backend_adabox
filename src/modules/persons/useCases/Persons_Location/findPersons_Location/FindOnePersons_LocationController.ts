import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOnePersons_LocationUseCase } from "./FindOnePersons_LocationUseCase";

class FindOnePersons_LocationController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOnePersons_LocationUseCase = container.resolve(FindOnePersons_LocationUseCase);

        const persons_Location = await findOnePersons_LocationUseCase.execute(Number.parseInt(id));

        if(persons_Location instanceof AppError){
            return response.status(400).json(persons_Location.message).send();
        }

        return response.status(200).json(persons_Location).send();
    }

}

export { FindOnePersons_LocationController };