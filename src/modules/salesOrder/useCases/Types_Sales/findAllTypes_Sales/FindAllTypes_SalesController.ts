import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllTypes_SalesUseCase } from "./FindAllTypes_SalesUseCase";

class FindAllTypes_SalesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const findAllTypes_SalesUseCase = container.resolve(FindAllTypes_SalesUseCase);

        const types_Sales = await findAllTypes_SalesUseCase.execute();

        return response.status(200).json(types_Sales).send();
    }

}

export { FindAllTypes_SalesController };