import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePersonsUseCase } from "./CreatePersonsUseCase";

class CreatePersonsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Name,
            Email,
            Password,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile } = request.body;

        const createPersonsUseCase = container.resolve(CreatePersonsUseCase);

        await createPersonsUseCase.execute({
            Name,
            Email,
            Password,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile
        });

        return response.status(201).send();
    }

}

export { CreatePersonsController };