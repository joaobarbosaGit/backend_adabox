import { inject, injectable } from "tsyringe";

import { ITypes_SalesDTO } from "@modules/salesOrder/dtos/ITypes_SalesDTO";
import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";

@injectable()
class CreateTypes_SalesUseCase{

    constructor(

    @inject("Types_SalesRepository")
    private types_SalesRepository: ITypes_SalesRepository){};

    async execute({
        Description
    }: ITypes_SalesDTO) : Promise<void> {

        await this.types_SalesRepository.create({
            Description
        });
    }
}

export { CreateTypes_SalesUseCase };