import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePersons_has_Persons_LocationUseCase } from "./UpdatePersons_has_Persons_LocationUseCase";

class UpdatePersons_has_Persons_LocationController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idPersons_has_Persons_Location,
            Persons_idPersons,
            Persons_Location_idPersons_Location
         } = request.body;

        const updatePersons_has_Persons_LocationUseCase = container.resolve(UpdatePersons_has_Persons_LocationUseCase);

        await updatePersons_has_Persons_LocationUseCase.execute({
            idPersons_has_Persons_Location,
            Persons_idPersons,
            Persons_Location_idPersons_Location
        });

        return response.status(200).send();
    }

}

export { UpdatePersons_has_Persons_LocationController };