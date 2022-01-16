import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePersons_LocationUseCase } from "./UpdatePersons_LocationUseCase";

class UpdatePersons_LocationController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idPersons_Location,
            Address,
            CEP,
            District,
            Number,
            Longitude_Latitude,
            City } = request.body;

        const updatePersons_LocationUseCase = container.resolve(UpdatePersons_LocationUseCase);

        await updatePersons_LocationUseCase.execute({
            idPersons_Location,
            Address,
            CEP,
            District,
            Number,
            Longitude_Latitude,
            City
        });

        return response.status(200).send();
    }

}

export { UpdatePersons_LocationController };