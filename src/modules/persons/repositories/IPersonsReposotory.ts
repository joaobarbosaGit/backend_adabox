import { IPersonsDTO } from "../dtos/IPersonsDTO";
import { Persons } from "../infra/entities/Persons";

interface IPersonsRepository {
    create(dados: IPersonsDTO): Promise<void>;
    update(dados: IPersonsDTO): Promise<void>;
    findById(idPersons: number): Promise<Persons>;
    findByEmail(Email: string): Promise<Persons>;
    findAll(): Promise<Persons[]>;
    delete(idPersons: number): Promise<void>;
}

export { IPersonsRepository };