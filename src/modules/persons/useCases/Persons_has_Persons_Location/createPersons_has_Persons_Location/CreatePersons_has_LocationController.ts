import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePersons_has_Persons_LocationUseCase } from "./CreatePersons_has_LocationUseCase"

class CreatePersons_has_Persons_LocationController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Persons_idPersons,
            Persons_Location_idPersons_Location 
        } = request.body;

        const createPersons_has_Persons_LocationUseCase = container.resolve(CreatePersons_has_Persons_LocationUseCase);

        await createPersons_has_Persons_LocationUseCase.execute({
            Persons_idPersons,
            Persons_Location_idPersons_Location
        });

        return response.status(201).send();
    }

}

export { CreatePersons_has_Persons_LocationController };