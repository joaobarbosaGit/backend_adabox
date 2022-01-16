import { inject, injectable } from "tsyringe";

import { IProducts_has_Products_AtributesDTO } from "@modules/products/dtos/IProducts_has_Products_AtributesDTO";
import { IProducts_has_Products_AtributesRepository } from "@modules/products/repositories/IProducts_has_Products_AtributesRepository";

@injectable()
class UpdateProducts_has_Products_AtributesUseCase{

    constructor(

    @inject("Products_has_Products_AtributesRepository")
    private products_has_Products_AtributesRepository: IProducts_has_Products_AtributesRepository){};

    async execute({
        idProducts_has_Products_Atributes,
        Products_idProducts,
        Products_Atributes_idProducts_Atributes
    }: IProducts_has_Products_AtributesDTO) : Promise<void> {

        await this.products_has_Products_AtributesRepository.update({
            idProducts_has_Products_Atributes,
            Products_idProducts,
            Products_Atributes_idProducts_Atributes
        });
    }
}

export { UpdateProducts_has_Products_AtributesUseCase };