import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePersons_has_EnterpriseUseCase } from "./UpdatePersons_EnterpriseUseCase";

class UpdatePersons_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idPersons_has_Enterprise,
            Persons_idPersons,
            Enterprise_idEnterprise
         } = request.body;

        const updatePersons_has_EnterpriseUseCase = container.resolve(UpdatePersons_has_EnterpriseUseCase);

        await updatePersons_has_EnterpriseUseCase.execute({
            idPersons_has_Enterprise,
            Persons_idPersons,
            Enterprise_idEnterprise
        });

        return response.status(200).send();
    }

}

export { UpdatePersons_has_EnterpriseController };