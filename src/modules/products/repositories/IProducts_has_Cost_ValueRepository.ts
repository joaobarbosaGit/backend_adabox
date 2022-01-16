import { IProducts_has_Cost_ValueDTO } from "../dtos/IProducts_has_Const_ValueDTO";
import { Products_has_Cost_Value } from "../infra/typeorm/entities/Products_has_Cost_Value";

interface IProducts_has_Cost_ValueRepository {
    create(dados: IProducts_has_Cost_ValueDTO): Promise<void>;
    update(dados: IProducts_has_Cost_ValueDTO): Promise<void>;
    findById(id_Products_has_Cost_Value: number): Promise<Products_has_Cost_Value>;
    delete(id_Products_has_Cost_Value: number): Promise<void>;
}

export { IProducts_has_Cost_ValueRepository };