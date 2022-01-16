import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IPersonsDTO } from "@modules/persons/dtos/IPersonsDTO";
import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";

@injectable()
class CreatePersonsUseCase{

    constructor(

    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository){};

    async execute({
        Name,
        Email,
        Password,
        Telephone_Number,
        RG,
        CPF,
        Profile_idProfile
    }: IPersonsDTO) : Promise<void> {

        const passwordHash = await hash(Password, 8);

        await this.personsRepository.create({
            Name,
            Email,
            Password: passwordHash,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile
        });
    }
}

export { CreatePersonsUseCase };