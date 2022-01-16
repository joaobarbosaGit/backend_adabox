import { inject, injectable } from "tsyringe";

import { Types_Sales } from "@modules/salesOrder/infra/entities/Types_Sales";
import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";

@injectable()
class FindAllTypes_SalesUseCase{

    constructor(

    @inject("Types_SalesRepository")
    private types_SalesRepository: ITypes_SalesRepository){};

    async execute() : Promise< Types_Sales []> {

       const Types_Sales = await this.types_SalesRepository.findAll();

       return Types_Sales;
    }
}

export { FindAllTypes_SalesUseCase };