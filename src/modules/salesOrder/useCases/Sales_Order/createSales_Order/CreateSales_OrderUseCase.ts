import { inject, injectable } from "tsyringe";

import { ISales_OrderDTO } from "@modules/salesOrder/dtos/ISales_OrderDTO";
import { ISales_OrderRepository } from "@modules/salesOrder/repositories/ISales_OrderRepository";

@injectable()
class CreateSales_OrderUseCase{

    constructor(

    @inject("Sales_OrderRepository")
    private sales_OrderRepository: ISales_OrderRepository){};

    async execute({
        Value,
        Id_Seller,
        Id_Client,
        Observations,
        Enterprise_idEnterprise,
        Types_Sales_idTypes_Sales
    }: ISales_OrderDTO) : Promise<void> {

        await this.sales_OrderRepository.create({
            Value,
            Id_Seller,
            Id_Client,
            Observations,
            Enterprise_idEnterprise,
            Types_Sales_idTypes_Sales
        });
    }
}

export { CreateSales_OrderUseCase };