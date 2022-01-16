import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePersonsUseCase } from "./UpdatePersonsUseCase";

class UpdatePersonsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idPersons,
            Name,
            Email,
            Password,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile } = request.body;

        const updatePersonsUseCase = container.resolve(UpdatePersonsUseCase);

        await updatePersonsUseCase.execute({
            idPersons,
            Name,
            Email,
            Password,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile
        });

        return response.status(200).send();
    }

}

export { UpdatePersonsController };