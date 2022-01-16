import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneSales_OrderUseCase } from "./FindOneSales_OrderUseCase";

class FindOneSales_OrderController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneSales_OrderUseCase = container.resolve(FindOneSales_OrderUseCase);

        const sales_Order = await findOneSales_OrderUseCase.execute(Number.parseInt(id));

        if(sales_Order instanceof AppError){
            return response.status(400).json(sales_Order.message).send();
        }

        return response.status(200).json(sales_Order).send();
    }

}

export { FindOneSales_OrderController };