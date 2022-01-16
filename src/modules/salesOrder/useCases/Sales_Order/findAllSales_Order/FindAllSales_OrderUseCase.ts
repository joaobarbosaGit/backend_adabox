import { inject, injectable } from "tsyringe";

import { ISales_OrderRepository } from "@modules/salesOrder/repositories/ISales_OrderRepository";
import { Sales_Order } from "@modules/salesOrder/infra/typeorm/entities/Sales_Order";

@injectable()
class FindAllSales_OrderUseCase{

    constructor(

    @inject("Sales_OrderRepository")
    private sales_OrderRepository: ISales_OrderRepository){};

    async execute() : Promise< Sales_Order []> {

       const Sales_Order = await this.sales_OrderRepository.findAll();

       return Sales_Order;
    }
}

export { FindAllSales_OrderUseCase };