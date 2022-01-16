import { inject, injectable } from "tsyringe";

import { IPersonsDTO } from "@modules/persons/dtos/IPersonsDTO";
import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";

@injectable()
class UpdatePersonsUseCase{

    constructor(

    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository){};

    async execute({
        idPersons,
        Name,
        Email,
        Password,
        Telephone_Number,
        RG,
        CPF,
        Profile_idProfile
    }: IPersonsDTO) : Promise<void> {

        await this.personsRepository.update({
            idPersons,
            Name,
            Email,
            Password,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile
        });
    }
}

export { UpdatePersonsUseCase };