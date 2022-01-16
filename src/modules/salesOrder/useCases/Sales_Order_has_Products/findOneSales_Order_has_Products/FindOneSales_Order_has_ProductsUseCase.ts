import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ISales_Order_has_ProductsRepository } from "@modules/salesOrder/repositories/ISales_Order_has_ProductsRepository";
import { Sales_Order_has_Products } from "@modules/salesOrder/infra/entities/Sales_Order_has_Products";

@injectable()
class FindOneSales_Order_has_ProductsUseCase{

    constructor(

    @inject("Sales_Order_has_ProductsRepository")
    private sales_Order_has_ProductsRepository: ISales_Order_has_ProductsRepository){};

    async execute(idSales_Order_has_Products: number) : Promise< Sales_Order_has_Products | AppError> {
        
        const person = await this.sales_Order_has_ProductsRepository.findById(idSales_Order_has_Products);

        if(!person){
            throw new AppError("Sales_Order_has_Products not exists!");
        }

        return person;
    }
}

export { FindOneSales_Order_has_ProductsUseCase };