import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProducts_has_Cost_ValueUseCase } from "./CreateProducts_has_Cost_ValueUseCase";

class CreateProducts_has_Cost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Products_idProducts,
            Cost_Value_idCost_Value
        } = request.body;

        const createProducts_has_Cost_ValueUseCase = container.resolve(CreateProducts_has_Cost_ValueUseCase);

        await createProducts_has_Cost_ValueUseCase.execute({
            Products_idProducts,
            Cost_Value_idCost_Value
        });

        return response.status(201).send();
    }

}

export { CreateProducts_has_Cost_ValueController };