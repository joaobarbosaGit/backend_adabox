import { IStorage_has_EnterpriseDTO } from "../dtos/IStorage_has_EnterpriseDTO";
import { Storage_has_Enterprise } from "../infra/entities/Storage_has_Enterprise";

interface IStorage_has_EnterpriseRepository {
    create(dados: IStorage_has_EnterpriseDTO): Promise<void>;
    update(dados: IStorage_has_EnterpriseDTO): Promise<void>;
    findById(id_Storage_has_Enterprise: number): Promise<Storage_has_Enterprise>;
    delete(id_Storage_has_Enterprise: number): Promise<void>;
}

export { IStorage_has_EnterpriseRepository };