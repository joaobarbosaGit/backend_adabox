import { ISales_OrderDTO } from "../dtos/ISales_OrderDTO";
import { Sales_Order } from "../infra/typeorm/entities/Sales_Order";

interface ISales_OrderRepository {
    create(dados: ISales_OrderDTO): Promise<void>;
    update(dados: ISales_OrderDTO): Promise<void>;
    findById(idSales_Order: number): Promise<Sales_Order>;
    findAll(): Promise<Sales_Order[]>;
    delete(idSales_Order: number): Promise<void>;
}

export { ISales_OrderRepository };