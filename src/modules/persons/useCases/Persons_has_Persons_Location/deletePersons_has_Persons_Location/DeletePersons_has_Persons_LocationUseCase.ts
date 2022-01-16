import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IPersons_has_Persons_LocationRepository } from "@modules/persons/repositories/IPersons_has_Persons_LocationRepository";

@injectable()
class DeletePersons_has_Persons_LocationUseCase{

    constructor(

    @inject("Persons_has_Persons_LocationRepository")
    private persons_has_Persons_LocationRepository: IPersons_has_Persons_LocationRepository){};

    async execute(idPersons_has_Persons_Location: number) : Promise<void | AppError> {
        
        const person = await this.persons_has_Persons_LocationRepository.findById(idPersons_has_Persons_Location);

        if(!person){
            throw new AppError("Persons_has_Persons_Location not exists!");
        }

        await this.persons_has_Persons_LocationRepository.delete(idPersons_has_Persons_Location);
    }
}

export { DeletePersons_has_Persons_LocationUseCase };