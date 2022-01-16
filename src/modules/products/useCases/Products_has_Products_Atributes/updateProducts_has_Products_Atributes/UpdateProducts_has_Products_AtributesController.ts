import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProducts_has_Products_AtributesUseCase } from "./UpdateProducts_has_Products_AtributesUseCase";


class UpdateProducts_has_Products_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idProducts_has_Products_Atributes,
            Products_idProducts,
            Products_Atributes_idProducts_Atributes
         } = request.body;

        const updateProducts_has_Products_AtributesUseCase = container.resolve(UpdateProducts_has_Products_AtributesUseCase);

        await updateProducts_has_Products_AtributesUseCase.execute({
            idProducts_has_Products_Atributes,
            Products_idProducts,
            Products_Atributes_idProducts_Atributes
        });

        return response.status(200).send();
    }

}

export { UpdateProducts_has_Products_AtributesController };