import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProducts_has_Products_AtributesUseCase } from "./CreateProducts_has_Products_AtributesUseCase";

class CreateProducts_has_Products_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Products_idProducts,
            Products_Atributes_idProducts_Atributes
        } = request.body;

        const createProducts_has_Products_AtributesUseCase = container.resolve(CreateProducts_has_Products_AtributesUseCase);

        await createProducts_has_Products_AtributesUseCase.execute({
            Products_idProducts,
            Products_Atributes_idProducts_Atributes
        });

        return response.status(201).send();
    }

}

export { CreateProducts_has_Products_AtributesController };