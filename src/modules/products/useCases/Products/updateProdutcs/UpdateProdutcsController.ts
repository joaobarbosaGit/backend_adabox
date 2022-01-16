import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductsUseCase } from "./UpdateProdutcsUseCase";

class UpdateProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idProducts,
            Name_Products,
            Description,
            Internal_Code,
            Bar_Code,
            Sell_Value,
            Color,
            Photograph
        } = request.body;

        const updateProductsUseCase = container.resolve(UpdateProductsUseCase);

        await updateProductsUseCase.execute({
            idProducts,
            Name_Products,
            Description,
            Internal_Code,
            Bar_Code,
            Sell_Value,
            Color,
            Photograph
        });

        return response.status(200).send();
    }

}

export { UpdateProductsController };