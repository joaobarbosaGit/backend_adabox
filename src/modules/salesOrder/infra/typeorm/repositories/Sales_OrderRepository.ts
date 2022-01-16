import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError";

import { Sales_Order } from "../entities/Sales_Order";
import { ISales_OrderRepository } from "@modules/salesOrder/repositories/ISales_OrderRepository";
import { ISales_OrderDTO } from "@modules/salesOrder/dtos/ISales_OrderDTO";

class Sales_OrderRepository implements ISales_OrderRepository {

    private repository: Repository<Sales_Order>;

    constructor(){
        this.repository = getRepository(Sales_Order);
    }

    async create({ 
        Value,
        Id_Seller,
        Id_Client,
        Observations,
        Enterprise_idEnterprise,
        Types_Sales_idTypes_Sales
    }: ISales_OrderDTO): Promise<void>{
        const sales_order = this.repository.create({
            Value,
            Id_Seller,
            Id_Client,
            Observations,
            Enterprise_idEnterprise,
            Types_Sales_idTypes_Sales
        });
        
        await this.repository.save(sales_order);
    }

    async update({
        idSales_Order,
        Created_at,
        Value,
        Id_Seller,
        Id_Client,
        Observations,
        Enterprise_idEnterprise,
        Types_Sales_idTypes_Sales
    }: ISales_OrderDTO): Promise<void> {

        const sales_order = await this.repository.findOne(idSales_Order);

        if(!sales_order){
            throw new AppError("Sales_Order not exists!");
        }

        sales_order.Created_at = Created_at ? Created_at : sales_order.Created_at;
        sales_order.Value = Value ? Value : sales_order.Value;
        sales_order.Id_Seller = Id_Seller ? Id_Seller : sales_order.Id_Seller;
        sales_order.Id_Client = Id_Client ? Id_Client : sales_order.Id_Client;
        sales_order.Observations = Observations ? Observations : sales_order.Observations;
        sales_order.Enterprise_idEnterprise = Enterprise_idEnterprise ? Enterprise_idEnterprise : sales_order.Enterprise_idEnterprise;
        sales_order.Types_Sales_idTypes_Sales = Types_Sales_idTypes_Sales ? Types_Sales_idTypes_Sales : sales_order.Types_Sales_idTypes_Sales;

        await this.repository.save(sales_order);
    }

    async findById(idSales_Order: number): Promise<Sales_Order> {

        const sales_order = await this.repository.findOne(idSales_Order);

        if(!sales_order){
            throw new AppError("Sales_Order not exists!");
        }

        return sales_order;
    }

    async findAll(): Promise<Sales_Order[]> {
        const sales_Order = await this.repository.find();

        if(!sales_Order){
            throw new AppError("Sales_Order not exists!");
        }

        return sales_Order;
    }

    async delete(idSales_Order: number): Promise<void> {

        const sales_order = await this.repository.findOne(idSales_Order);

        if(!sales_order){
            throw new AppError("Sales_Order not exists!");
        }


        await this.repository.delete(sales_order.idSales_Order);

    }
}

export { Sales_OrderRepository };