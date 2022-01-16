import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProducts_has_StorageUseCase } from "./CreateProducts_has_StorageUseCase";

class CreateProducts_has_StorageController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            Products_idProducts,
            Storage_idStorage
        } = request.body;

        const createProducts_has_StorageUseCase = container.resolve(CreateProducts_has_StorageUseCase);

        await createProducts_has_StorageUseCase.execute({
            Products_idProducts,
            Storage_idStorage
        });

        return response.status(201).send();
    }

}

export { CreateProducts_has_StorageController };