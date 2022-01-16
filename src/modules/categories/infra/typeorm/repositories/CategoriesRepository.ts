import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError";
import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { Categories } from "../entities/Categories";
import { ICategoriesDTO } from "@modules/categories/dtos/CategoriesDTO";

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Categories>;

    constructor(){
        this.repository = getRepository(Categories);
    }

    async create({ 
        Name_Category
    }: ICategoriesDTO): Promise<void>{
        const categories = this.repository.create({
            Name_Category
        });
        
        await this.repository.save(categories);
    }

    async update({
        idCategories,
        Name_Category
    }: ICategoriesDTO): Promise<void> {

        const categories = await this.repository.findOne(idCategories);

        if(!categories){
            throw new AppError("Pessoa nao cadastrada!");
        }

        categories.Name_Category = Name_Category ? Name_Category : categories.Name_Category;
        await this.repository.save(categories);
    }

    async findById(idCategories: number): Promise<Categories> {

        const categories = await this.repository.findOne(idCategories);

        if(!categories){
            throw new AppError("Categories not exists!");
        }

        return categories;
    }

    async findAll(): Promise<Categories[]> {
        const categories = await this.repository.find();

        if(!categories){
            throw new AppError("Categories not exists!");
        }

        return categories;
    }

    async delete(idCategories: number): Promise<void> {

        const categories = await this.repository.findOne(idCategories);

        if(!categories){
            throw new AppError("Categories not exists!");
        }


        await this.repository.delete(categories.idCategories);

    }
}

export { CategoriesRepository };