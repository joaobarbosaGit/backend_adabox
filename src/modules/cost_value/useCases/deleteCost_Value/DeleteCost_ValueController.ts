import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteCost_ValueUseCase } from "./DeleteCost_ValueUseCase";

class DeleteCost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteCost_ValueUseCase = container.resolve(DeleteCost_ValueUseCase);

        const resposta = await deleteCost_ValueUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteCost_ValueController };