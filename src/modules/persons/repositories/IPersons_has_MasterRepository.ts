import { IPersons_has_MasterDTO } from "../dtos/IPersons_has_MasterDTO";
import { Persons_has_Master } from "../infra/entities/Persons_has_Master";

interface IPersons_has_MasterRepository {
    create(dados: IPersons_has_MasterDTO): Promise<void>;
    update(dados: IPersons_has_MasterDTO): Promise<void>;
    findById(id_Persons_has_Master: number): Promise<Persons_has_Master>;
    delete(id_Persons_has_Master: number): Promise<void>;
}

export { IPersons_has_MasterRepository };