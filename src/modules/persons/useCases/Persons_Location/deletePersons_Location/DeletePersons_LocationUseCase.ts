import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IPersons_LocationRepository } from "@modules/persons/repositories/IPersons_LocationRepository";

@injectable()
class DeletePersons_LocationUseCase{

    constructor(

    @inject("Persons_LocationRepository")
    private persons_LocationRepository: IPersons_LocationRepository){};

    async execute(idPersons_Location: number) : Promise<void | AppError> {
        
        await this.persons_LocationRepository.delete(idPersons_Location);
    }
}

export { DeletePersons_LocationUseCase };