import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateEnterpriseUseCase } from "./UpdateEnterpriseUseCase";

class UpdateEnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { idEnterprise, Master_idMaster} = request.body;

        const updateEnterpriseUseCase = container.resolve(UpdateEnterpriseUseCase);

        await updateEnterpriseUseCase.execute({idEnterprise, Master_idMaster});

        return response.status(200).send();
    }

}

export { UpdateEnterpriseController };