import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteTypes_SalesUseCase } from "./DeleteTypes_SalesUseCase";

class DeleteTypes_SalesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteTypes_SalesUseCase = container.resolve(DeleteTypes_SalesUseCase);

        const resposta = await deleteTypes_SalesUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteTypes_SalesController };