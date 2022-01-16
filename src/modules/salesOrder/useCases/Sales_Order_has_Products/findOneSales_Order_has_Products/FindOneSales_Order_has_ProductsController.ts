import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneSales_Order_has_ProductsUseCase } from "./FindOneSales_Order_has_ProductsUseCase";

class FindOneSales_Order_has_ProductsController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneSales_Order_has_ProductsUseCase = container.resolve(FindOneSales_Order_has_ProductsUseCase);

        const sales_Order_has_Products = await findOneSales_Order_has_ProductsUseCase.execute(Number.parseInt(id));

        if(sales_Order_has_Products instanceof AppError){
            return response.status(400).json(sales_Order_has_Products.message).send();
        }

        return response.status(200).json(sales_Order_has_Products).send();
    }

}

export { FindOneSales_Order_has_ProductsController };