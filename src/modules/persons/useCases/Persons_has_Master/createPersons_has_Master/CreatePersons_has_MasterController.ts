import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePersons_has_MasterUseCase } from "./CreatePersons_has_MasterUseCase";

class CreatePersons_has_MasterController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Persons_idPersons,
            Master_idMaster 
        } = request.body;

        const createPersons_has_MasterUseCase = container.resolve(CreatePersons_has_MasterUseCase);

        await createPersons_has_MasterUseCase.execute({
            Persons_idPersons,
            Master_idMaster
        });

        return response.status(201).send();
    }

}

export { CreatePersons_has_MasterController };