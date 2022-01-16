import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IProducts_AtributesRepository } from "@modules/products/repositories/IProducts_AtributesRepository";

@injectable()
class DeleteProducts_AtributesUseCase{

    constructor(

    @inject("Products_AtributesRepository")
    private products_AtributesRepository: IProducts_AtributesRepository){};

    async execute(idProducts_Atributes: number) : Promise<void | AppError> {

        await this.products_AtributesRepository.delete(idProducts_Atributes);
    }
}

export { DeleteProducts_AtributesUseCase };