import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IPersons_has_EnterpriseRepository } from "@modules/persons/repositories/IPersons_has_EnterpriseRepository";
import { Persons_has_Enterprise } from "@modules/persons/infra/entities/Persons_has_Enterprise";

@injectable()
class FindOnePersons_has_EnterpriseUseCase{

    constructor(

    @inject("Persons_has_EnterpriseRepository")
    private persons_has_EnterpriseRepository: IPersons_has_EnterpriseRepository){};

    async execute(idPersons_has_Enterprise: number) : Promise< Persons_has_Enterprise | AppError> {
        
        const person = await this.persons_has_EnterpriseRepository.findById(idPersons_has_Enterprise);

        if(!person){
            throw new AppError("Persons_has_Enterprise not exists!");
        }

        return person;
    }
}

export { FindOnePersons_has_EnterpriseUseCase };