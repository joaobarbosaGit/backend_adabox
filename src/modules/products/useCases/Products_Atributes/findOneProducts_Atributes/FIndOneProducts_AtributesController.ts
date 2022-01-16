import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneProducts_AtributesUseCase } from "./FindOneProducts_AtributesUseCase";

class FindOneProducts_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneProducts_AtributesUseCase = container.resolve(FindOneProducts_AtributesUseCase);

        const products_Atributes = await findOneProducts_AtributesUseCase.execute(Number.parseInt(id));

        if(products_Atributes instanceof AppError){
            return response.status(400).json(products_Atributes.message).send();
        }

        return response.status(200).json(products_Atributes).send();
    }

}

export { FindOneProducts_AtributesController };