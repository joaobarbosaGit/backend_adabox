import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTypes_SalesUseCase } from "./UpdateTypes_SalesUseCase";

class UpdateTypes_SalesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idTypes_Sales,
            Description
        } = request.body;

        const updateTypes_SalesUseCase = container.resolve(UpdateTypes_SalesUseCase);

        await updateTypes_SalesUseCase.execute({
            idTypes_Sales,
            Description
        });

        return response.status(200).send();
    }

}

export { UpdateTypes_SalesController };