import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOnePersonsUseCase } from "./FindOnePersonUseCase";


class FindOnePersonsController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOnePersonsUseCase = container.resolve(FindOnePersonsUseCase);

        const persons = await findOnePersonsUseCase.execute(Number.parseInt(id));

        if(persons instanceof AppError){
            return response.status(400).json(persons.message).send();
        }

        return response.status(200).json(persons).send();
    }

}

export { FindOnePersonsController };