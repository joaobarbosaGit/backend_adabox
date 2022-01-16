import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IPersons_has_EnterpriseRepository } from "@modules/persons/repositories/IPersons_has_EnterpriseRepository";

@injectable()
class DeletePersons_has_EnterpriseUseCase{

    constructor(

    @inject("Persons_has_EnterpriseRepository")
    private persons_has_EnterpriseRepository: IPersons_has_EnterpriseRepository){};

    async execute(idPersons_has_Enterprise: number) : Promise<void | AppError> {
        
        const person = await this.persons_has_EnterpriseRepository.findById(idPersons_has_Enterprise);

        if(!person){
            throw new AppError("Persons_has_Enterprise not exists!");
        }

        await this.persons_has_EnterpriseRepository.delete(idPersons_has_Enterprise);
    }
}

export { DeletePersons_has_EnterpriseUseCase };