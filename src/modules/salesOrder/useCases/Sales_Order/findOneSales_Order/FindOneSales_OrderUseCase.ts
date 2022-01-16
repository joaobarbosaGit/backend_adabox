import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ISales_OrderRepository } from "@modules/salesOrder/repositories/ISales_OrderRepository";
import { Sales_Order } from "@modules/salesOrder/infra/entities/Sales_Order";

@injectable()
class FindOneSales_OrderUseCase{

    constructor(

    @inject("Sales_OrderRepository")
    private Sales_OrderRepository: ISales_OrderRepository){};

    async execute(idSales_Order: number) : Promise< Sales_Order | AppError> {
        
        const person = await this.Sales_OrderRepository.findById(idSales_Order);

        if(!person){
            throw new AppError("Sales_Order not exists!");
        }

        return person;
    }
}

export { FindOneSales_OrderUseCase };