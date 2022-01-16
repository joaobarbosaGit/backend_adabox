import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/errors/AppError"; 
import { ICost_ValueRepository } from "@modules/cost_value/repositories/ICost_ValueRepository";
import { Cost_Value } from "../entities/Cost_Value";
import { ICost_ValueDTO } from "@modules/cost_value/dtos/Cost_ValueDTO";

class Cost_ValueRepository implements ICost_ValueRepository {

    private repository: Repository<Cost_Value>;

    constructor(){
        this.repository = getRepository(Cost_Value);
    }

    async create({ 
        Cost_Value
    }: ICost_ValueDTO): Promise<void>{
        const cost_value = this.repository.create({
            Cost_Value
        });
        
        await this.repository.save(cost_value);
    }

    async update({
        idCost_Value,
        Cost_Value,
        Created_at
    }: ICost_ValueDTO): Promise<void> {

        const cost_value = await this.repository.findOne(idCost_Value);

        if(!cost_value){
            throw new AppError("Cost_Value not exists!");
        }

        cost_value.Cost_Value = Cost_Value ? Cost_Value : cost_value.Cost_Value;
        cost_value.Created_at = Created_at ? Created_at : cost_value.Created_at;

        await this.repository.save(cost_value);
    }

    async findById(idCost_Value: number): Promise<Cost_Value> {

        const cost_value = await this.repository.findOne(idCost_Value);

        if(!cost_value){
            throw new AppError("Cost_Value not exists!");
        }

        return cost_value;
    }

    async delete(idCost_Value: number): Promise<void> {

        const cost_value = await this.repository.findOne(idCost_Value);

        if(!cost_value){
            throw new AppError("Cost_Value not exists!");
        }


        await this.repository.delete(cost_value.idCost_Value);

    }
}

export { Cost_ValueRepository };