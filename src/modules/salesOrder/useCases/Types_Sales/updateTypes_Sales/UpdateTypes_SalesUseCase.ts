import { inject, injectable } from "tsyringe";

import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";
import { ITypes_SalesDTO } from "@modules/salesOrder/dtos/ITypes_SalesDTO";

@injectable()
class UpdateTypes_SalesUseCase{

    constructor(

    @inject("Types_SalesRepository")
    private types_SalesRepository: ITypes_SalesRepository){};

    async execute({
        idTypes_Sales,
        Description
    }: ITypes_SalesDTO) : Promise<void> {

        await this.types_SalesRepository.update({
            idTypes_Sales,
            Description
        });
    }
}

export { UpdateTypes_SalesUseCase };