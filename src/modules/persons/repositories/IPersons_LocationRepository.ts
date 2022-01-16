import { IPersons_LocationDTO } from "../dtos/IPersons_LocationDTO";
import { Persons_Location } from "../infra/entities/Persons_Location";

interface IPersons_LocationRepository {
    create(dados: IPersons_LocationDTO): Promise<void>;
    update(dados: IPersons_LocationDTO): Promise<void>;
    findById(idPersons_Location: number): Promise<Persons_Location>;
    delete(idPersons_Location: number): Promise<void>;
}

export { IPersons_LocationRepository };