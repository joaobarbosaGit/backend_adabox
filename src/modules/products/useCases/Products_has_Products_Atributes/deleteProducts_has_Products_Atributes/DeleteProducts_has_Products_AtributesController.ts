import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteProducts_has_Products_AtributesUseCase } from "./DeleteProducts_has_Products_AtributesUseCase";

class DeleteProducts_has_Products_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteProducts_has_Products_AtributesUseCase = container.resolve(DeleteProducts_has_Products_AtributesUseCase);

        const resposta = await deleteProducts_has_Products_AtributesUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteProducts_has_Products_AtributesController };