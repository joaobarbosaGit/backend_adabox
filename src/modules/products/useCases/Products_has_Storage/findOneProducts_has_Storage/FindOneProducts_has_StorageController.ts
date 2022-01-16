import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { FindOneProducts_has_StorageUseCase } from "./FindOneProducts_has_StorageUseCase";

class FindOneProducts_has_StorageController {

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;
         
        const findOneProducts_has_StorageUseCase = container.resolve(FindOneProducts_has_StorageUseCase);

        const products_has_Storage = await findOneProducts_has_StorageUseCase.execute(Number.parseInt(id));

        if(products_has_Storage instanceof AppError){
            return response.status(400).json(products_has_Storage.message).send();
        }

        return response.status(200).json(products_has_Storage).send();
    }

}

export { FindOneProducts_has_StorageController };