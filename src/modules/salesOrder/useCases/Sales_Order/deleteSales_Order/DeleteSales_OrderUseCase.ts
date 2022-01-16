import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ISales_OrderRepository } from "@modules/salesOrder/repositories/ISales_OrderRepository";

@injectable()
class DeleteSales_OrderUseCase{

    constructor(

    @inject("Sales_OrderRepository")
    private sales_OrderRepository: ISales_OrderRepository){};

    async execute(idSales_Order: number) : Promise<void | AppError> {

        await this.sales_OrderRepository.delete(idSales_Order);
    }
}

export { DeleteSales_OrderUseCase };