import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IProducts_has_Products_AtributesRepository } from "@modules/products/repositories/IProducts_has_Products_AtributesRepository";
import { Products_has_Products_Atributes } from "../entities/Products_has_Products_Atributes";
import { IProducts_has_Products_AtributesDTO } from "@modules/products/dtos/IProducts_has_Products_AtributesDTO";

class Products_has_Products_AtributesRepository implements IProducts_has_Products_AtributesRepository {

    private repository: Repository<Products_has_Products_Atributes>;

    constructor(){
        this.repository = getRepository(Products_has_Products_Atributes);
    }

    async create({ 
        Products_idProducts,
        Products_Atributes_idProducts_Atributes
    }: IProducts_has_Products_AtributesDTO): Promise<void>{
        const products_has_Products_Atributes = this.repository.create({
            Products_idProducts,
            Products_Atributes_idProducts_Atributes
        });
        
        await this.repository.save(products_has_Products_Atributes);
    }

    async update({
        idProducts_has_Products_Atributes,
        Products_idProducts,
        Products_Atributes_idProducts_Atributes
    }: IProducts_has_Products_AtributesDTO): Promise<void> {

        const products_has_Products_Atributes = await this.repository.findOne(idProducts_has_Products_Atributes);

        if(!products_has_Products_Atributes){
            throw new AppError("Products_has_Products_Atributes not exists!");
        }

        products_has_Products_Atributes.Products_idProducts = Products_idProducts ? Products_idProducts : products_has_Products_Atributes.Products_idProducts;
        products_has_Products_Atributes.Products_Atributes_idProducts_Atributes = Products_Atributes_idProducts_Atributes ? Products_Atributes_idProducts_Atributes : products_has_Products_Atributes.Products_Atributes_idProducts_Atributes;

        await this.repository.save(products_has_Products_Atributes);
    }

    async findById(idProducts_has_Products_Atributes: number): Promise<Products_has_Products_Atributes> {

        const products_has_Products_Atributes = await this.repository.findOne(idProducts_has_Products_Atributes);

        if(!products_has_Products_Atributes){
            throw new AppError("Products_has_Products_Atributes not exists!");
        }

        return products_has_Products_Atributes;
    }

    async delete(idProducts_has_Products_Atributes: number): Promise<void> {

        await this.repository.delete(idProducts_has_Products_Atributes);

    }
}

export { Products_has_Products_AtributesRepository };