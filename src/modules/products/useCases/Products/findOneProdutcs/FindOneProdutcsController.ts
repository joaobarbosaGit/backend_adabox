import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneProductsUseCase } from "./FindOneProdutcsUseCase";


class FindOneProductsController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneProductsUseCase = container.resolve(FindOneProductsUseCase);

        const products = await findOneProductsUseCase.execute(Number.parseInt(id));

        if(products instanceof AppError){
            return response.status(400).json(products.message).send();
        }

        return response.status(200).json(products).send();
    }

}

export { FindOneProductsController };