import { IEnterpriseDTO } from "../dtos/IEnterpriseDTO";
import { Enterprise } from "../infra/entities/Enterprise";

interface IEnterpriseRepository {
    create(dados: IEnterpriseDTO): Promise<void>;
    update(dados: IEnterpriseDTO): Promise<void>;
    findById(idEnterprise: number): Promise<Enterprise>;
    delete(idEnterprise: number): Promise<void>;
}

export { IEnterpriseRepository };