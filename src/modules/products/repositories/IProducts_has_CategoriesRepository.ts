import { IProducts_has_CategoriesDTO } from "../dtos/IProducts_has_CategoriesDTO";
import { Products_has_Categories } from "../infra/typeorm/entities/Products_has_Categories";

interface IProducts_has_CategoriesRepository {
    create(dados: IProducts_has_CategoriesDTO): Promise<void>;
    update(dados: IProducts_has_CategoriesDTO): Promise<void>;
    findById(id_Products_has_Categories: number): Promise<Products_has_Categories>;
    delete(id_Products_has_Categories: number): Promise<void>;
}

export { IProducts_has_CategoriesRepository };