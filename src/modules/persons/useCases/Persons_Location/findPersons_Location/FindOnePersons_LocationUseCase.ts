import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IPersons_LocationRepository } from "@modules/persons/repositories/IPersons_LocationRepository";
import { Persons_Location } from "@modules/persons/infra/entities/Persons_Location";

@injectable()
class FindOnePersons_LocationUseCase{

    constructor(

    @inject("Persons_LocationRepository")
    private persons_LocationRepository: IPersons_LocationRepository){};

    async execute(idPersons_Location: number) : Promise< Persons_Location| AppError> {
        
        const person_Location = await this.persons_LocationRepository.findById(idPersons_Location);

        if(!person_Location){
            throw new AppError("Persons_Location not exists!");
        }

        return person_Location;
    }
}

export { FindOnePersons_LocationUseCase };