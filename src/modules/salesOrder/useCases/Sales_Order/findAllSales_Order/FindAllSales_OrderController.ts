import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllSales_OrderUseCase } from "./FindAllSales_OrderUseCase";

class FindAllSales_OrderController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const findAllSales_OrderUseCase = container.resolve(FindAllSales_OrderUseCase);

        const sales_Order = await findAllSales_OrderUseCase.execute();

        return response.status(200).json(sales_Order).send();
    }

}

export { FindAllSales_OrderController };