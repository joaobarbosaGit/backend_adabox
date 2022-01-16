import { IMasterDTO } from "../dtos/IMasterDTO";
import { Master } from "../infra/entities/Master";

interface IMasterRepository {
    create(dados: IMasterDTO): Promise<void>;
    update(dados: IMasterDTO): Promise<void>;
    findById(idMaster: number): Promise<Master>;
    delete(idMaster: number): Promise<void>;
}

export { IMasterRepository };