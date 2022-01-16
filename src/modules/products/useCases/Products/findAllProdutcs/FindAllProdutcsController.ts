import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllProductsUseCase } from "./FindAllProdutcsUseCase";

class FindAllProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const findAllProductsUseCase = container.resolve(FindAllProductsUseCase);

        const products = await findAllProductsUseCase.execute();

        return response.status(200).json(products).send();
    }

}

export { FindAllProductsController };