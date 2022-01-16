import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DeleteSales_OrderUseCase } from "./DeleteSales_OrderUseCase";


class DeleteSales_OrderController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { id } = request.params;

        const deleteSales_OrderUseCase = container.resolve(DeleteSales_OrderUseCase);

        const resposta = await deleteSales_OrderUseCase.execute( Number.parseInt(id));

        if(resposta instanceof AppError){
            return response.status(400).json(resposta.message).send();
        }

        return response.status(200).send();
    }

}

export { DeleteSales_OrderController };