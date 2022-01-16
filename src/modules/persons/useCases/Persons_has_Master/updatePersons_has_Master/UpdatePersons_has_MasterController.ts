import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePersons_has_MasterUseCase } from "./UpdatePersons_has_MasterUseCase";

class UpdatePersons_has_MasterController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idPersons_has_Master,
            Persons_idPersons,
            Master_idMaster
         } = request.body;

        const updatePersons_has_MasterUseCase = container.resolve(UpdatePersons_has_MasterUseCase);

        await updatePersons_has_MasterUseCase.execute({
            idPersons_has_Master,
            Persons_idPersons,
            Master_idMaster
        });

        return response.status(200).send();
    }

}

export { UpdatePersons_has_MasterController };