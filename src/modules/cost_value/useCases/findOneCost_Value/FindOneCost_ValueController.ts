import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneCost_ValueUseCase } from "./FindOneCost_ValueUseCase";

class FindOneCost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneCost_ValueUseCase = container.resolve(FindOneCost_ValueUseCase);

        const cost_Value = await findOneCost_ValueUseCase.execute(Number.parseInt(id));

        if(cost_Value instanceof AppError){
            return response.status(400).json(cost_Value.message).send();
        }

        return response.status(200).json(cost_Value).send();
    }

}

export { FindOneCost_ValueController };