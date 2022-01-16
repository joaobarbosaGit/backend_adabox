import { IProducts_AtributesDTO } from "../dtos/IProducts_AtributesDTO";
import { Products_Atributes } from "../infra/typeorm/entities/Products_Atributes";

interface IProducts_AtributesRepository {
    create(dados: IProducts_AtributesDTO): Promise<void>;
    update(dados: IProducts_AtributesDTO): Promise<void>;
    findById(idProducts_Atributes: number): Promise<Products_Atributes>;
    delete(idProducts_Atributes: number): Promise<void>;
}

export { IProducts_AtributesRepository };