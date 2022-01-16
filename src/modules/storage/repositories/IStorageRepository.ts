import { IStorageDTO } from "../dtos/IStrorageDTO";

interface IStorageRepository {
    create(dados: IStorageDTO): Promise<void>;
    update(dados: IStorageDTO): Promise<void>;
    findById(idStorage: number): Promise<Storage>;
    delete(idStorage: number): Promise<void>;
}

export { IStorageRepository };