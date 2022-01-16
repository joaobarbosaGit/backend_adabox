import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCost_ValueUseCase } from "./FindOneCost_ValueUseCase";

class UpdateCost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idCost_Value,
            Cost_Value,
            Created_at
        } = request.body;

        const updateCost_ValueUseCase = container.resolve(UpdateCost_ValueUseCase);

        await updateCost_ValueUseCase.execute({
            idCost_Value,
            Cost_Value,
            Created_at
        });

        return response.status(200).send();
    }

}

export { UpdateCost_ValueController };