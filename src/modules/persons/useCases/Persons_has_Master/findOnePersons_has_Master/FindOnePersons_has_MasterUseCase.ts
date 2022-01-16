import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IPersons_has_MasterRepository } from "@modules/persons/repositories/IPersons_has_MasterRepository";
import { Persons_has_Master } from "@modules/persons/infra/entities/Persons_has_Master";

@injectable()
class FindOnePersons_has_MasterUseCase{

    constructor(

    @inject("Persons_has_MasterRepository")
    private persons_has_MasterRepository: IPersons_has_MasterRepository){};

    async execute(idPersons_has_Master: number) : Promise< Persons_has_Master | AppError> {
        
        const person = await this.persons_has_MasterRepository.findById(idPersons_has_Master);

        if(!person){
            throw new AppError("Persons_has_Master not exists!");
        }

        return person;
    }
}

export { FindOnePersons_has_MasterUseCase };