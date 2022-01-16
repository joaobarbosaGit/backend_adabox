import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductsUseCase } from "./CreateProdutcsUseCase";

class CreateProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Name_Products,
            Description,
            Internal_Code,
            Bar_Code,
            Sell_Value,
            Color,
            Photograph
        } = request.body;

        const createProductsUseCase = container.resolve(CreateProductsUseCase);

        await createProductsUseCase.execute({
            Name_Products,
            Description,
            Internal_Code,
            Bar_Code,
            Sell_Value,
            Color,
            Photograph
        });

        return response.status(201).send();
    }

}

export { CreateProductsController };