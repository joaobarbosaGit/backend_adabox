import { inject, injectable } from "tsyringe";

import { IPersons_has_Persons_LocationDTO } from "@modules/persons/dtos/IPersons_has_Persons_LocationDTO";
import { IPersons_has_Persons_LocationRepository } from "@modules/persons/repositories/IPersons_has_Persons_LocationRepository";

@injectable()
class CreatePersons_has_Persons_LocationUseCase{

    constructor(

    @inject("Persons_has_Persons_LocationRepository")
    private persons_has_Persons_LocationRepository: IPersons_has_Persons_LocationRepository){};

    async execute({
        Persons_idPersons,
        Persons_Location_idPersons_Location
    }: IPersons_has_Persons_LocationDTO) : Promise<void> {

        await this.persons_has_Persons_LocationRepository.create({
            Persons_idPersons,
            Persons_Location_idPersons_Location
        });
    }
}

export { CreatePersons_has_Persons_LocationUseCase };