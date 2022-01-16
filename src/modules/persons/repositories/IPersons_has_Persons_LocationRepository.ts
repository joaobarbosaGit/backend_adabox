import { IPersons_has_Persons_LocationDTO } from "../dtos/IPersons_has_Persons_LocationDTO";
import { Persons_has_Persons_Location } from "../infra/entities/Persons_has_Persons_Location";

interface IPersons_has_Persons_LocationRepository {
    create(dados: IPersons_has_Persons_LocationDTO): Promise<void>;
    update(dados: IPersons_has_Persons_LocationDTO): Promise<void>;
    findById(id_Persons_has_Persons_Location: number): Promise<Persons_has_Persons_Location>;
    delete(id_Persons_has_Persons_Location: number): Promise<void>;
}

export { IPersons_has_Persons_LocationRepository };