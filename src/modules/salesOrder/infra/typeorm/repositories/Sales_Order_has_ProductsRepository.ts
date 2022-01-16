import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { ISales_Order_has_ProductsRepository } from "@modules/salesOrder/repositories/ISales_Order_has_ProductsRepository";
import { Sales_Order_has_Products } from "../entities/Sales_Order_has_Products";
import { ISales_Order_has_ProductsDTO } from "@modules/salesOrder/dtos/ISales_Order_has_ProductsDTO";

class Sales_Order_has_ProductsRepository implements ISales_Order_has_ProductsRepository {

    private repository: Repository<Sales_Order_has_Products>;

    constructor(){
        this.repository = getRepository(Sales_Order_has_Products);
    }

    async create({ 
        Sales_Order_idSales_Order,
        Products_idProducts
    }: ISales_Order_has_ProductsDTO): Promise<void>{
        const sales_order_has_products = this.repository.create({
            Sales_Order_idSales_Order,
            Products_idProducts
        });
        
        await this.repository.save(sales_order_has_products);
    }

    async update({
        idSales_Order_has_Products,
        Sales_Order_idSales_Order,
        Products_idProducts
    }: ISales_Order_has_ProductsDTO): Promise<void> {

        const sales_order_has_products = await this.repository.findOne(idSales_Order_has_Products);

        if(!sales_order_has_products){
            throw new AppError("Sales_Order_has_Products not exists!");
        }

        sales_order_has_products.Sales_Order_idSales_Order = Sales_Order_idSales_Order ? Sales_Order_idSales_Order : sales_order_has_products.Sales_Order_idSales_Order;
        sales_order_has_products.Products_idProducts = Products_idProducts ? Products_idProducts : sales_order_has_products.Products_idProducts;

        await this.repository.save(sales_order_has_products);
    }

    async findById(idSales_Order_has_Products: number): Promise<Sales_Order_has_Products> {

        const sales_order_has_products = await this.repository.findOne(idSales_Order_has_Products);

        if(!sales_order_has_products){
            throw new AppError("Sales_Order_has_Products not exists!");
        }

        return sales_order_has_products;
    }

    async delete(idSales_Order_has_Products: number): Promise<void> {

        await this.repository.delete(idSales_Order_has_Products);

    }
}

export { Sales_Order_has_ProductsRepository };