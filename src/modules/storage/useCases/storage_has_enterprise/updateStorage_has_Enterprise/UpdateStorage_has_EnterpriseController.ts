import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateStorage_has_EnterpriseUseCase } from "./UpdateStorage_has_EnterpriseUseCase";

class UpdateStorage_has_EnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idStorage_has_Enterprise,
            Storage_idStorage,
            Enterprise_idEnterprise
         } = request.body;

        const updateStorage_has_EnterpriseUseCase = container.resolve(UpdateStorage_has_EnterpriseUseCase);

        await updateStorage_has_EnterpriseUseCase.execute({
            idStorage_has_Enterprise,
            Storage_idStorage,
            Enterprise_idEnterprise
        });

        return response.status(200).send();
    }

}

export { UpdateStorage_has_EnterpriseController };