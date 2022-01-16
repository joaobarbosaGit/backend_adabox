import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePersons_has_EnterpriseUseCase } from "./CreatePersons_EnterpriseUseCase";

class CreatePersons_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Persons_idPersons,
            Enterprise_idEnterprise 
        } = request.body;

        const createPersons_has_EnterpriseUseCase = container.resolve(CreatePersons_has_EnterpriseUseCase);

        await createPersons_has_EnterpriseUseCase.execute({
            Persons_idPersons,
            Enterprise_idEnterprise
        });

        return response.status(201).send();
    }

}

export { CreatePersons_has_EnterpriseController };