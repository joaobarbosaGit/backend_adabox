import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTypes_SalesUseCase } from "./CreateTypes_SalesUseCase";


class CreateTypes_SalesController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const { Description } = request.body;

        const createTypes_SalesUseCase = container.resolve(CreateTypes_SalesUseCase);

        await createTypes_SalesUseCase.execute({ Description });

        return response.status(201).send();
    }

}

export { CreateTypes_SalesController };