import { IProductsDTO } from "../dtos/IProductsDTO";
import { Products } from "../infra/typeorm/entities/Products";

interface IProductsRepository {
    create(dados: IProductsDTO): Promise<void>;
    update(dados: IProductsDTO): Promise<void>;
    findById(idProducts: number): Promise<Products>;
    findAll(): Promise<Products[]>;
    delete(idProducts: number): Promise<void>;
}

export { IProductsRepository };