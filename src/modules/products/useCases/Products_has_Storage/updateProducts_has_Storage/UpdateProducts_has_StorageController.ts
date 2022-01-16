import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProducts_has_StorageUseCase } from "./UpdateProducts_has_StorageUseCase";

class UpdateProducts_has_StorageController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const {  
            idProducts_has_Storage,
            Products_idProducts,
            Storage_idStorage
         } = request.body;

        const updateProducts_has_StorageUseCase = container.resolve(UpdateProducts_has_StorageUseCase);

        await updateProducts_has_StorageUseCase.execute({
            idProducts_has_Storage,
            Products_idProducts,
            Storage_idStorage
        });

        return response.status(200).send();
    }

}

export { UpdateProducts_has_StorageController };