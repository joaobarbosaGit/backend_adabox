import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStorage_has_EnterpriseUseCase } from "./CreateStorage_has_EnterpriseUseCase";

class CreateStorage_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Storage_idStorage,
            Enterprise_idEnterprise
        } = request.body;

        const createStorage_has_EnterpriseUseCase = container.resolve(CreateStorage_has_EnterpriseUseCase);

        await createStorage_has_EnterpriseUseCase.execute({
            Storage_idStorage,
            Enterprise_idEnterprise
        });

        return response.status(201).send();
    }

}

export { CreateStorage_has_EnterpriseController };