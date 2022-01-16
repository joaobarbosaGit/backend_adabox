import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProducts_AtributesUseCase } from "./UpdateProducts_AtributesUseCase";

class UpdateProducts_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idProducts_Atributes,
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        } = request.body;

        const updateProducts_AtributesUseCase = container.resolve(UpdateProducts_AtributesUseCase);

        await updateProducts_AtributesUseCase.execute({
            idProducts_Atributes,
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        });

        return response.status(200).send();
    }

}

export { UpdateProducts_AtributesController };