import { inject, injectable } from "tsyringe";

import { ICost_ValueDTO } from "@modules/cost_value/dtos/Cost_ValueDTO";
import { ICost_ValueRepository } from "@modules/cost_value/repositories/ICost_ValueRepository";

@injectable()
class UpdateCost_ValueUseCase{

    constructor(

    @inject("Cost_ValueRepository")
    private cost_ValueRepository: ICost_ValueRepository){};

    async execute({
        idCost_Value,
        Cost_Value,
        Created_at
    }: ICost_ValueDTO) : Promise<void> {

        await this.cost_ValueRepository.update({
            idCost_Value,
            Cost_Value,
            Created_at
        });
    }
}

export { UpdateCost_ValueUseCase };