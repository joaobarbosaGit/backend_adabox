import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllPersonsUseCase } from "./FindAllPersonsUseCase";

class FindAllPersonsController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const findAllPersonsUseCase = container.resolve(FindAllPersonsUseCase);

        const persons = await findAllPersonsUseCase.execute();

        return response.status(200).json(persons).send();
    }

}

export { FindAllPersonsController };