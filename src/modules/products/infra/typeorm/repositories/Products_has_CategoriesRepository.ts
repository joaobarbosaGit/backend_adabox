import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IProducts_has_CategoriesRepository } from "@modules/products/repositories/IProducts_has_CategoriesRepository";
import { Products_has_Categories } from "../entities/Products_has_Categories";
import { IProducts_has_CategoriesDTO } from "@modules/products/dtos/IProducts_has_CategoriesDTO";

class Products_has_CategoriesRepository implements IProducts_has_CategoriesRepository {

    private repository: Repository<Products_has_Categories>;

    constructor(){
        this.repository = getRepository(Products_has_Categories);
    }

    async create({ 
        Products_idProducts,
        Categories_idCategories
    }: IProducts_has_CategoriesDTO): Promise<void>{
        const products_has_Categories = this.repository.create({
            Products_idProducts,
            Categories_idCategories
        });
        
        await this.repository.save(products_has_Categories);
    }

    async update({
        idProducts_has_Categories,
        Products_idProducts,
        Categories_idCategories
    }: IProducts_has_CategoriesDTO): Promise<void> {

        const products_has_Categories = await this.repository.findOne(idProducts_has_Categories);

        if(!products_has_Categories){
            throw new AppError("Products_has_Categories not exists!");
        }

        products_has_Categories.Products_idProducts = Products_idProducts ? Products_idProducts : products_has_Categories.Products_idProducts;
        products_has_Categories.Categories_idCategories = Categories_idCategories ? Categories_idCategories : products_has_Categories.Categories_idCategories;

        await this.repository.save(products_has_Categories);
    }

    async findById(idProducts_has_Categories: number): Promise<Products_has_Categories> {

        const products_has_Categories = await this.repository.findOne(idProducts_has_Categories);

        if(!products_has_Categories){
            throw new AppError("Products_has_Categories not exists!");
        }

        return products_has_Categories;
    }

    async delete(idProducts_has_Categories: number): Promise<void> {

        await this.repository.delete(idProducts_has_Categories);

    }
}

export { Products_has_CategoriesRepository };