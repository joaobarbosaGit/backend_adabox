import { ITypes_SalesDTO } from "../dtos/ITypes_SalesDTO";
import { Types_Sales } from "../infra/entities/Types_Sales";

interface ITypes_SalesRepository {
    create(dados: ITypes_SalesDTO): Promise<void>;
    update(dados: ITypes_SalesDTO): Promise<void>;
    findById(idTypes_Sales: number): Promise<Types_Sales>;
    findAll(): Promise<Types_Sales[]>;
    delete(idTypes_Sales: number): Promise<void>;
}

export { ITypes_SalesRepository };