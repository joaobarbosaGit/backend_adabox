import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ISales_Order_has_ProductsRepository } from "@modules/salesOrder/repositories/ISales_Order_has_ProductsRepository";

@injectable()
class DeleteSales_Order_has_ProductsUseCase{

    constructor(

    @inject("Sales_Order_has_ProductsRepository")
    private sales_Order_has_ProductsRepository: ISales_Order_has_ProductsRepository){};

    async execute(idSales_Order_has_Products: number) : Promise<void | AppError> {
        
        const person = await this.sales_Order_has_ProductsRepository.findById(idSales_Order_has_Products);

        if(!person){
            throw new AppError("Sales_Order_has_Products not exists!");
        }

        await this.sales_Order_has_ProductsRepository.delete(idSales_Order_has_Products);
    }
}

export { DeleteSales_Order_has_ProductsUseCase };