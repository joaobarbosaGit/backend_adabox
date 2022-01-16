import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IProducts_AtributesRepository } from "@modules/products/repositories/IProducts_AtributesRepository";
import { Products_Atributes } from "../entities/Products_Atributes";
import { IProducts_AtributesDTO } from "@modules/products/dtos/IProducts_AtributesDTO";

class Products_AtributesRepository implements IProducts_AtributesRepository {

    private repository: Repository<Products_Atributes>;

    constructor(){
        this.repository = getRepository(Products_Atributes);
    }

    async create({ 
        Weight,
        Width,
        Height,
        Length,
        Types_Sales_idTypes_Sales
    }: IProducts_AtributesDTO): Promise<void>{
        const product_atributes = this.repository.create({
            Weight,
            Width,
            Height,
            Length,
            Types_Sales_idTypes_Sales
        });
        
        await this.repository.save(product_atributes);
    }

    async update({
        idProducts_Atributes,
        Weight,
        Width,
        Height,
        Length,
        Types_Sales_idTypes_Sales
    }: IProducts_AtributesDTO): Promise<void> {

        const product_atributes = await this.repository.findOne(idProducts_Atributes);

        if(!product_atributes){
            throw new AppError("Products_Atributes not exists!");
        }

        product_atributes.Weight = Weight ? Weight : product_atributes.Weight;
        product_atributes.Width = Width ? Width : product_atributes.Width;
        product_atributes.Height = Height ? Height : product_atributes.Height;
        product_atributes.Length = Length ? Length : product_atributes.Length;
        product_atributes.Types_Sales_idTypes_Sales = Types_Sales_idTypes_Sales ? Types_Sales_idTypes_Sales : product_atributes.Types_Sales_idTypes_Sales;

        await this.repository.save(product_atributes);
    }

    async findById(idProducts_Atributes: number): Promise<Products_Atributes> {

        const product_atributes = await this.repository.findOne(idProducts_Atributes);

        if(!product_atributes){
            throw new AppError("Products_Atributes not exists!");
        }

        return product_atributes;
    }

    async delete(idProducts_Atributes: number): Promise<void> {

        const product_atributes = await this.repository.findOne(idProducts_Atributes);

        if(!product_atributes){
            throw new AppError("Products_Atributes not exists!");
        }


        await this.repository.delete(product_atributes.idProducts_Atributes);

    }
}

export { Products_AtributesRepository };