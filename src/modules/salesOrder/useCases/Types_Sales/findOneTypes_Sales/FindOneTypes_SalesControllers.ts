import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneTypes_SalesUseCase } from "./FindOneTypes_SalesUseCase";

class FindOneTypes_SalesController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneTypes_SalesUseCase = container.resolve(FindOneTypes_SalesUseCase);

        const Types_Sales = await findOneTypes_SalesUseCase.execute(Number.parseInt(id));

        if(Types_Sales instanceof AppError){
            return response.status(400).json(Types_Sales.message).send();
        }

        return response.status(200).json(Types_Sales).send();
    }

}

export { FindOneTypes_SalesController };