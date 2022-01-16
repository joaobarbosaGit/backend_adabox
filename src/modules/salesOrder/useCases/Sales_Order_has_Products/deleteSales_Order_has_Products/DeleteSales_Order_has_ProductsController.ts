import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteSales_Order_has_ProductsUseCase } from "./DeleteSales_Order_has_ProductsUseCase";

class DeleteSales_Order_has_ProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteSales_Order_has_ProductsUseCase = container.resolve(DeleteSales_Order_has_ProductsUseCase);

        const resposta = await deleteSales_Order_has_ProductsUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteSales_Order_has_ProductsController };