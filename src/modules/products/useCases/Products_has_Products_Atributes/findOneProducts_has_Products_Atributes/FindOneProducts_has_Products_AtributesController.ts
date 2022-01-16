import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneProducts_has_Products_AtributesUseCase } from "./FindOneProducts_has_Products_AtributesUseCase";

class FindOneProducts_has_Products_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneProducts_has_Products_AtributesUseCase = container.resolve(FindOneProducts_has_Products_AtributesUseCase);

        const products_has_Products_Atributes = await findOneProducts_has_Products_AtributesUseCase.execute(Number.parseInt(id));

        if(products_has_Products_Atributes instanceof AppError){
            return response.status(400).json(products_has_Products_Atributes.message).send();
        }

        return response.status(200).json(products_has_Products_Atributes).send();
    }

}

export { FindOneProducts_has_Products_AtributesController };