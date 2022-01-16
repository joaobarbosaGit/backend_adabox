import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSales_Order_has_ProductsUseCase } from "./CreateSales_Order_has_ProductsUseCase";

class CreateSales_Order_has_ProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Sales_Order_idSales_Order,
            Products_idProducts
        } = request.body;

        const createSales_Order_has_ProductsUseCase = container.resolve(CreateSales_Order_has_ProductsUseCase);

        await createSales_Order_has_ProductsUseCase.execute({
            Sales_Order_idSales_Order,
            Products_idProducts
        });

        return response.status(201).send();
    }

}

export { CreateSales_Order_has_ProductsController };