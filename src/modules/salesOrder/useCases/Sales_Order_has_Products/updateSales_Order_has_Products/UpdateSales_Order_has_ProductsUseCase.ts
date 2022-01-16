import { inject, injectable } from "tsyringe";

import { ISales_Order_has_ProductsRepository } from "@modules/salesOrder/repositories/ISales_Order_has_ProductsRepository";
import { ISales_Order_has_ProductsDTO } from "@modules/salesOrder/dtos/ISales_Order_has_ProductsDTO";

@injectable()
class UpdateSales_Order_has_ProductsUseCase{

    constructor(

    @inject("Sales_Order_has_ProductsRepository")
    private sales_Order_has_ProductsRepository: ISales_Order_has_ProductsRepository){};

    async execute({
        idSales_Order_has_Products,
        Sales_Order_idSales_Order,
        Products_idProducts
    }: ISales_Order_has_ProductsDTO) : Promise<void> {

        await this.sales_Order_has_ProductsRepository.update({
            idSales_Order_has_Products,
            Sales_Order_idSales_Order,
            Products_idProducts
        });
    }
}

export { UpdateSales_Order_has_ProductsUseCase };