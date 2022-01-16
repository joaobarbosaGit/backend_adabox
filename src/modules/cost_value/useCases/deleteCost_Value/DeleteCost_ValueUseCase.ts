import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ICost_ValueRepository } from "@modules/cost_value/repositories/ICost_ValueRepository";

@injectable()
class DeleteCost_ValueUseCase{

    constructor(

    @inject("Cost_ValueRepository")
    private cost_ValueRepository: ICost_ValueRepository){};

    async execute(idCost_Value: number) : Promise<void | AppError> {

        await this.cost_ValueRepository.delete(idCost_Value);
    }
}

export { DeleteCost_ValueUseCase };