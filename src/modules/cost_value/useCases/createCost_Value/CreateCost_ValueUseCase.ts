import { inject, injectable } from "tsyringe";

import { ICost_ValueDTO } from "@modules/cost_value/dtos/Cost_ValueDTO";
import { ICost_ValueRepository } from "@modules/cost_value/repositories/ICost_ValueRepository";

@injectable()
class CreateCost_ValueUseCase{

    constructor(

    @inject("Cost_ValueRepository")
    private cost_ValueRepository: ICost_ValueRepository){};

    async execute({
        Cost_Value
    }: ICost_ValueDTO) : Promise<void> {

        await this.cost_ValueRepository.create({
            Cost_Value
        });
    }
}

export { CreateCost_ValueUseCase };