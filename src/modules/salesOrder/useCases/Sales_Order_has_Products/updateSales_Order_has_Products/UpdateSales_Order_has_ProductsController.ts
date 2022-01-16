import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateSales_Order_has_ProductsUseCase } from "./UpdateSales_Order_has_ProductsUseCase";

class UpdateSales_Order_has_ProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idSales_Order_has_Products,
            Sales_Order_idSales_Order,
            Products_idProducts
         } = request.body;

        const updateSales_Order_has_ProductsUseCase = container.resolve(UpdateSales_Order_has_ProductsUseCase);

        await updateSales_Order_has_ProductsUseCase.execute({
            idSales_Order_has_Products,
            Sales_Order_idSales_Order,
            Products_idProducts
        });

        return response.status(200).send();
    }

}

export { UpdateSales_Order_has_ProductsController };