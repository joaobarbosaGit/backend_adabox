import { ILogsDTO } from "../dtos/ILogsDTO";
import { Logs } from "../infra/entities/Logs";

interface ILogsRepository {
    create(dados: ILogsDTO): Promise<void>;
    update(dados: ILogsDTO): Promise<void>;
    findById(idLogs: number): Promise<Logs>;
    delete(idLogs: number): Promise<void>;
}

export { ILogsRepository };