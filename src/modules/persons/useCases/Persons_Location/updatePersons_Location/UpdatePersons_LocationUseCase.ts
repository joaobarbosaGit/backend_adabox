import { inject, injectable } from "tsyringe";

import { IPersons_LocationDTO } from "@modules/persons/dtos/IPersons_LocationDTO";
import { IPersons_LocationRepository } from "@modules/persons/repositories/IPersons_LocationRepository";

@injectable()
class UpdatePersons_LocationUseCase{

    constructor(

    @inject("Persons_LocationRepository")
    private personsRepository: IPersons_LocationRepository){};

    async execute({
        Address,
        CEP,
        District,
        Number,
        Longitude_Latitude,
        City
    }: IPersons_LocationDTO) : Promise<void> {

        await this.personsRepository.update({
            Address,
            CEP,
            District,
            Number,
            Longitude_Latitude,
            City
        });
    }
}

export { UpdatePersons_LocationUseCase };