import { IProducts_has_StorageDTO } from "../dtos/Products_has_StorageDTO";
import { Products_has_Storage } from "../infra/typeorm/entities/Products_has_Storage";

interface IProducts_has_StorageRepository {
    create(dados: IProducts_has_StorageDTO): Promise<void>;
    update(dados: IProducts_has_StorageDTO): Promise<void>;
    findById(id_Products_has_Storage: number): Promise<Products_has_Storage>;
    delete(id_Products_has_Storage: number): Promise<void>;
}

export { IProducts_has_StorageRepository };