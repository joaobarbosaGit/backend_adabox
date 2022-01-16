import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";

@injectable()
class DeleteTypes_SalesUseCase{

    constructor(

    @inject("Types_SalesRepository")
    private types_SalesRepository: ITypes_SalesRepository){};

    async execute(idTypes_Sales: number) : Promise<void | AppError> {

        await this.types_SalesRepository.delete(idTypes_Sales);
    }
}

export { DeleteTypes_SalesUseCase };