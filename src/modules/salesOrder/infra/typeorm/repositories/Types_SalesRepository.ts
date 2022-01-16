import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError";

import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";
import { Types_Sales } from "../entities/Types_Sales";
import { ITypes_SalesDTO } from "@modules/salesOrder/dtos/ITypes_SalesDTO";

class Types_SalesRepository implements ITypes_SalesRepository {

    private repository: Repository<Types_Sales>;

    constructor(){
        this.repository = getRepository(Types_Sales);
    }

    async create({ 
        Description
    }: ITypes_SalesDTO): Promise<void>{
        const types_sales = this.repository.create({
            Description
        });
        
        await this.repository.save(types_sales);
    }

    async update({
        idTypes_Sales,
        Description
    }: ITypes_SalesDTO): Promise<void> {

        const types_Sales = await this.repository.findOne(idTypes_Sales);

        if(!types_Sales){
            throw new AppError("Pessoa nao cadastrada!");
        }

        types_Sales.Description = Description ? Description : types_Sales.Description;
        await this.repository.save(types_Sales);
    }

    async findById(idTypes_Sales: number): Promise<Types_Sales> {

        const types_Sales = await this.repository.findOne(idTypes_Sales);

        if(!types_Sales){
            throw new AppError("Types_Sales not exists!");
        }

        return types_Sales;
    }

    async findAll(): Promise<Types_Sales[]> {
        const types_Sales = await this.repository.find();

        if(!types_Sales){
            throw new AppError("Types_Sales not exists!");
        }

        return types_Sales;
    }

    async delete(idTypes_Sales: number): Promise<void> {

        const types_Sales = await this.repository.findOne(idTypes_Sales);

        if(!types_Sales){
            throw new AppError("Types_Sales not exists!");
        }


        await this.repository.delete(types_Sales.idTypes_Sales);

    }
}

export { Types_SalesRepository };