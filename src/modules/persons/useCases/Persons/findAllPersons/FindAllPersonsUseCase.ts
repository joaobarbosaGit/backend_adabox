import { inject, injectable } from "tsyringe";

import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";
import { Persons } from "@modules/persons/infra/entities/Persons";

@injectable()
class FindAllPersonsUseCase{

    constructor(

    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository){};

    async execute() : Promise< Persons []> {

       const persons = await this.personsRepository.findAll();

       return persons;
    }
}

export { FindAllPersonsUseCase };