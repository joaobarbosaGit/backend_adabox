import { inject, injectable } from "tsyringe";

import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeletePersonsUseCase{

    constructor(

    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository){};

    async execute(idPersons: number) : Promise<void | AppError> {

        await this.personsRepository.delete(idPersons);
    }
}

export { DeletePersonsUseCase };