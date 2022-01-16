import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IProducts_has_Cost_ValueRepository } from "@modules/products/repositories/IProducts_has_Cost_ValueRepository";
import { Products_has_Cost_Value } from "../entities/Products_has_Cost_Value";
import { IProducts_has_Cost_ValueDTO } from "@modules/products/dtos/IProducts_has_Const_ValueDTO";

class Products_has_Cost_ValueRepository implements IProducts_has_Cost_ValueRepository {

    private repository: Repository<Products_has_Cost_Value>;

    constructor(){
        this.repository = getRepository(Products_has_Cost_Value);
    }

    async create({ 
        Products_idProducts,
        Cost_Value_idCost_Value
    }: IProducts_has_Cost_ValueDTO): Promise<void>{
        const products_has_Cost_Value = this.repository.create({
            Products_idProducts,
            Cost_Value_idCost_Value
        });
        
        await this.repository.save(products_has_Cost_Value);
    }

    async update({
        idProducts_has_Cost_Value,
        Products_idProducts,
        Cost_Value_idCost_Value
    }: IProducts_has_Cost_ValueDTO): Promise<void> {

        const products_has_Cost_Value = await this.repository.findOne(idProducts_has_Cost_Value);

        if(!products_has_Cost_Value){
            throw new AppError("Products_has_Cost_Value not exists!");
        }

        products_has_Cost_Value.Products_idProducts = Products_idProducts ? Products_idProducts : products_has_Cost_Value.Products_idProducts;
        products_has_Cost_Value.Cost_Value_idCost_Value = Cost_Value_idCost_Value ? Cost_Value_idCost_Value : products_has_Cost_Value.Cost_Value_idCost_Value;

        await this.repository.save(products_has_Cost_Value);
    }

    async findById(idProducts_has_Cost_Value: number): Promise<Products_has_Cost_Value> {

        const products_has_Cost_Value = await this.repository.findOne(idProducts_has_Cost_Value);

        if(!products_has_Cost_Value){
            throw new AppError("Products_has_Cost_Value not exists!");
        }

        return products_has_Cost_Value;
    }

    async delete(idProducts_has_Cost_Value: number): Promise<void> {

        await this.repository.delete(idProducts_has_Cost_Value);

    }
}

export { Products_has_Cost_ValueRepository };