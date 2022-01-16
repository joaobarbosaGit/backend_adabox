import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError"; 
import { ICost_ValueRepository } from "@modules/cost_value/repositories/ICost_ValueRepository";
import { Cost_Value } from "@modules/cost_value/infra/typeorm/entities/Cost_Value";

@injectable()
class FindOneCost_ValueUseCase{

    constructor(

    @inject("Cost_ValueRepository")
    private cost_ValueRepository: ICost_ValueRepository){};

    async execute(idCost_Value: number) : Promise< Cost_Value | AppError> {
        
        const person = await this.cost_ValueRepository.findById(idCost_Value);

        if(!person){
            throw new AppError("Cost_Value not exists!");
        }

        return person;
    }
}

export { FindOneCost_ValueUseCase };