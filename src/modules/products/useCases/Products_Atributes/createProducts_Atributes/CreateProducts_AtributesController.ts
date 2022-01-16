import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProducts_AtributesUseCase } from "./CreateProducts_AtributesUseCase";

class CreateProducts_AtributesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        } = request.body;

        const createProducts_AtributesUseCase = container.resolve(CreateProducts_AtributesUseCase);

        await createProducts_AtributesUseCase.execute({
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        });

        return response.status(201).send();
    }

}

export { CreateProducts_AtributesController };