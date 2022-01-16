import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneProducts_has_Cost_ValueUseCase } from "./FindOneProducts_has_Cost_ValueUseCase";

class FindOneProducts_has_Cost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneProducts_has_Cost_ValueUseCase = container.resolve(FindOneProducts_has_Cost_ValueUseCase);

        const products_has_Cost_Value = await findOneProducts_has_Cost_ValueUseCase.execute(Number.parseInt(id));

        if(products_has_Cost_Value instanceof AppError){
            return response.status(400).json(products_has_Cost_Value.message).send();
        }

        return response.status(200).json(products_has_Cost_Value).send();
    }

}

export { FindOneProducts_has_Cost_ValueController };