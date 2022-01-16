import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCost_ValueUseCase } from "./CreateCost_ValueUseCase";

class CreateCost_ValueController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Cost_Value
        } = request.body;

        const createCost_ValueUseCase = container.resolve(CreateCost_ValueUseCase);

        await createCost_ValueUseCase.execute({
            Cost_Value
        });

        return response.status(201).send();
    }

}

export { CreateCost_ValueController };