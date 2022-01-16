import { ICost_ValueDTO } from "../dtos/Cost_ValueDTO";
import { Cost_Value } from "../infra/typeorm/entities/Cost_Value";

interface ICost_ValueRepository {
    create(dados: ICost_ValueDTO): Promise<void>;
    update(dados: ICost_ValueDTO): Promise<void>;
    findById(idCost_Value: number): Promise<Cost_Value>;
    delete(idCost_Value: number): Promise<void>;
}

export { ICost_ValueRepository };