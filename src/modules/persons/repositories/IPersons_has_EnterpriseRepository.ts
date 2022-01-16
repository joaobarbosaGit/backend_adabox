import { IPersons_has_EnterpriseDTO } from "../dtos/IPersons_EnterpriseDTO";
import { Persons_has_Enterprise } from "../infra/entities/Persons_has_Enterprise";

interface IPersons_has_EnterpriseRepository {
    create(dados: IPersons_has_EnterpriseDTO): Promise<void>;
    update(dados: IPersons_has_EnterpriseDTO): Promise<void>;
    findById(id_Persons_has_Enterprise: number): Promise<Persons_has_Enterprise>;
    delete(id_Persons_has_Enterprise: number): Promise<void>;
}

export { IPersons_has_EnterpriseRepository };