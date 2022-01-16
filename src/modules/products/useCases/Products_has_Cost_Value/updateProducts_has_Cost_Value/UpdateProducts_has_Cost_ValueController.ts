import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProducts_has_Cost_ValueUseCase } from "./UpdateProducts_has_Cost_ValueUseCase";

class UpdateProducts_has_Cost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idProducts_has_Cost_Value,
            Products_idProducts,
            Cost_Value_idCost_Value
         } = request.body;

        const updateProducts_has_Cost_ValueUseCase = container.resolve(UpdateProducts_has_Cost_ValueUseCase);

        await updateProducts_has_Cost_ValueUseCase.execute({
            idProducts_has_Cost_Value,
            Products_idProducts,
            Cost_Value_idCost_Value
        });

        return response.status(200).send();
    }

}

export { UpdateProducts_has_Cost_ValueController };