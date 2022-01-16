import { inject, injectable } from "tsyringe";

import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";
import { Persons } from "@modules/persons/infra/entities/Persons";
import { AppError } from "@shared/errors/AppError";

@injectable()
class FindOnePersonsUseCase{

    constructor(

    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository){};

    async execute(idPersons: number) : Promise< Persons | AppError> {
        
        const person = await this.personsRepository.findById(idPersons);

        if(!person){
            throw new AppError("Pessoa nao cadastrada!");
        }

        return person;
    }
}

export { FindOnePersonsUseCase };