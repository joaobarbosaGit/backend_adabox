import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSales_OrderUseCase } from "./CreateSales_OrderUseCase";

class CreateSales_OrderController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Value,
            Id_Seller,
            Id_Client,
            Observations,
            Enterprise_idEnterprise,
            Types_Sales_idTypes_Sales
        } = request.body;

        const createSales_OrderUseCase = container.resolve(CreateSales_OrderUseCase);

        await createSales_OrderUseCase.execute({
            Value,
            Id_Seller,
            Id_Client,
            Observations,
            Enterprise_idEnterprise,
            Types_Sales_idTypes_Sales
        });

        return response.status(201).send();
    }

}

export { CreateSales_OrderController };