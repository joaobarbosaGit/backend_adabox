import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateEnterpriseUseCase } from "./CreateEnterpriseUseCase";

class CreateEnterpriseController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { Master_idMaster } = request.body;

        const createEnterpriseUseCase = container.resolve(CreateEnterpriseUseCase);

        await createEnterpriseUseCase.execute({ Master_idMaster });

        return response.status(201).send();
    }

}

export { CreateEnterpriseController };