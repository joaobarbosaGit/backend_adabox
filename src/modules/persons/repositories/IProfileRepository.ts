import { IProfileDTO } from "../dtos/IProfileDTO";
import { Profile } from "../infra/entities/Profile";

interface IProfileRepository {
    create(dados: IProfileDTO): Promise<void>;
    update(dados: IProfileDTO): Promise<void>;
    findById(idProfile: number): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    delete(idProfile: number): Promise<void>;
}

export { IProfileRepository };