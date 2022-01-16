import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_has_Cost_ValueRepository } from "@modules/products/repositories/IProducts_has_Cost_ValueRepository";

@injectable()
class DeleteProducts_has_Cost_ValueUseCase{

    constructor(

    @inject("Products_has_Cost_ValueRepository")
    private Products_has_Cost_ValueRepository: IProducts_has_Cost_ValueRepository){};

    async execute(idProducts_has_Cost_Value: number) : Promise<void | AppError> {
        
        const person = await this.Products_has_Cost_ValueRepository.findById(idProducts_has_Cost_Value);

        if(!person){
            throw new AppError("Products_has_Cost_Value not exists!");
        }

        await this.Products_has_Cost_ValueRepository.delete(idProducts_has_Cost_Value);
    }
}

export { DeleteProducts_has_Cost_ValueUseCase };