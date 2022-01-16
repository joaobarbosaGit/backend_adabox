import { ICategoriesDTO } from "../dtos/CategoriesDTO";
import { Categories } from "../infra/typeorm/entities/Categories";

interface ICategoriesRepository {
    create(dados: ICategoriesDTO): Promise<void>;
    update(dados: ICategoriesDTO): Promise<void>;
    findById(idCategories: number): Promise<Categories>;
    findAll(): Promise<Categories[]>;
    delete(idCategories: number): Promise<void>;
}

export { ICategoriesRepository };