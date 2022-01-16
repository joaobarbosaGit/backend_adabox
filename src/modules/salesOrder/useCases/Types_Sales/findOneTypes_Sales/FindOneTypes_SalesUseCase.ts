import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";
import { Types_Sales } from "@modules/salesOrder/infra/entities/Types_Sales";


@injectable()
class FindOneTypes_SalesUseCase{

    constructor(

    @inject("Types_SalesRepository")
    private types_SalesRepository: ITypes_SalesRepository){};

    async execute(idTypes_Sales: number) : Promise< Types_Sales | AppError> {
        
        const person = await this.types_SalesRepository.findById(idTypes_Sales);

        if(!person){
            throw new AppError("Types_Sales not exists!");
        }

        return person;
    }
}

export { FindOneTypes_SalesUseCase };