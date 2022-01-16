import { IProducts_has_Products_AtributesDTO } from "../dtos/IProducts_has_Products_AtributesDTO";
import { Products_has_Products_Atributes } from "../infra/typeorm/entities/Products_has_Products_Atributes";

interface IProducts_has_Products_AtributesRepository {
    create(dados: IProducts_has_Products_AtributesDTO): Promise<void>;
    update(dados: IProducts_has_Products_AtributesDTO): Promise<void>;
    findById(id_Products_has_Products_Atributes: number): Promise<Products_has_Products_Atributes>;
    delete(id_Products_has_Products_Atributes: number): Promise<void>;
}

export { IProducts_has_Products_AtributesRepository };