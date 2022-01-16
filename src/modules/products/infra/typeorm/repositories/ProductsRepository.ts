import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Products } from "../entities/Products";
import { IProductsDTO } from "@modules/products/dtos/IProductsDTO";

class ProductsRepository implements IProductsRepository {

    private repository: Repository<Products>;

    constructor(){
        this.repository = getRepository(Products);
    }

    async create({ 
        Name_Products,
        Description,
        Internal_Code,
        Bar_Code,
        Sell_Value,
        Color,
        Photograph
    }: IProductsDTO): Promise<void>{
        const product = this.repository.create({
            Name_Products,
            Description,
            Internal_Code,
            Bar_Code,
            Sell_Value,
            Color,
            Photograph
        });
        
        await this.repository.save(product);
    }

    async update({
        idProducts,
        Name_Products,
        Description,
        Internal_Code,
        Bar_Code,
        Sell_Value,
        Color,
        Photograph
    }: IProductsDTO): Promise<void> {

        const product = await this.repository.findOne(idProducts);

        if(!product){
            throw new AppError("Products not exists!");
        }

        product.Name_Products = Name_Products ? Name_Products : product.Name_Products;
        product.Description = Description ? Description : product.Description;
        product.Internal_Code = Internal_Code ? Internal_Code : product.Internal_Code;
        product.Bar_Code = Bar_Code ? Bar_Code : product.Bar_Code;
        product.Sell_Value = Sell_Value ? Sell_Value : product.Sell_Value;
        product.Color = Color ? Color : product.Color;
        product.Photograph = Photograph ? Photograph : product.Photograph;

        await this.repository.save(product);
    }

    async findById(idProducts: number): Promise<Products> {

        const product = await this.repository.findOne(idProducts);

        if(!product){
            throw new AppError("Products not exists!");
        }

        return product;
    }

    async findAll(): Promise<Products[]> {
        const Products = await this.repository.find();

        if(!Products){
            throw new AppError("Products not exists!");
        }

        return Products;
    }

    async delete(idProducts: number): Promise<void> {

        const product = await this.repository.findOne(idProducts);

        if(!product){
            throw new AppError("Products not exists!");
        }


        await this.repository.delete(product.idProducts);

    }
}

export { ProductsRepository };