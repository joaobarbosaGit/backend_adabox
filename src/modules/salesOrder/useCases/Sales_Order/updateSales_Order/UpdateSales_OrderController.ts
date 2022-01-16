import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateSales_OrderUseCase } from "./UpdateSales_OrderUseCase";

class UpdateSales_OrderController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idSales_Order,
            Created_at,
            Value,
            Id_Seller,
            Id_Client,
            Observations,
            Enterprise_idEnterprise,
            Types_Sales_idTypes_Sales
        } = request.body;

        const updateSales_OrderUseCase = container.resolve(UpdateSales_OrderUseCase);

        await updateSales_OrderUseCase.execute({
            idSales_Order,
            Created_at,
            Value,
            Id_Seller,
            Id_Client,
            Observations,
            Enterprise_idEnterprise,
            Types_Sales_idTypes_Sales
        });

        return response.status(200).send();
    }

}

export { UpdateSales_OrderController };