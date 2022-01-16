import { ISales_Order_has_ProductsDTO } from "../dtos/ISales_Order_has_ProductsDTO";
import { Sales_Order_has_Products } from "../infra/entities/Sales_Order_has_Products";

interface ISales_Order_has_ProductsRepository {
    create(dados: ISales_Order_has_ProductsDTO): Promise<void>;
    update(dados: ISales_Order_has_ProductsDTO): Promise<void>;
    findById(id_Sales_Order_has_Products: number): Promise<Sales_Order_has_Products>;
    delete(id_Sales_Order_has_Products: number): Promise<void>;
}

export { ISales_Order_has_ProductsRepository };