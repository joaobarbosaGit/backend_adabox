import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { IProducts_has_StorageRepository } from "@modules/products/repositories/IProducts_has_StorageRepository";
import { Products_has_Storage } from "../entities/Products_has_Storage";
import { IProducts_has_StorageDTO } from "@modules/products/dtos/Products_has_StorageDTO";

class Products_has_StorageRepository implements IProducts_has_StorageRepository {

    private repository: Repository<Products_has_Storage>;

    constructor(){
        this.repository = getRepository(Products_has_Storage);
    }

    async create({ 
        Products_idProducts,
        Storage_idStorage
    }: IProducts_has_StorageDTO): Promise<void>{
        const products_has_Storage = this.repository.create({
            Products_idProducts,
            Storage_idStorage
        });
        
        await this.repository.save(products_has_Storage);
    }

    async update({
        idProducts_has_Storage,
        Products_idProducts,
        Storage_idStorage
    }: IProducts_has_StorageDTO): Promise<void> {

        const products_has_Storage = await this.repository.findOne(idProducts_has_Storage);

        if(!products_has_Storage){
            throw new AppError("Products_has_Storage not exists!");
        }

        products_has_Storage.Products_idProducts = Products_idProducts ? Products_idProducts : products_has_Storage.Products_idProducts;
        products_has_Storage.Storage_idStorage = Storage_idStorage ? Storage_idStorage : products_has_Storage.Storage_idStorage;

        await this.repository.save(products_has_Storage);
    }

    async findById(idProducts_has_Storage: number): Promise<Products_has_Storage> {

        const products_has_Storage = await this.repository.findOne(idProducts_has_Storage);

        if(!products_has_Storage){
            throw new AppError("Products_has_Storage not exists!");
        }

        return products_has_Storage;
    }

    async delete(idProducts_has_Storage: number): Promise<void> {

        await this.repository.delete(idProducts_has_Storage);

    }
}

export { Products_has_StorageRepository };