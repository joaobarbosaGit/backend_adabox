import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IPersons_has_MasterRepository } from "@modules/persons/repositories/IPersons_has_MasterRepository";

@injectable()
class DeletePersons_has_MasterUseCase{

    constructor(

    @inject("Persons_has_MasterRepository")
    private persons_has_MasterRepository: IPersons_has_MasterRepository){};

    async execute(idPersons_has_Master: number) : Promise<void | AppError> {
        
        const person = await this.persons_has_MasterRepository.findById(idPersons_has_Master);

        if(!person){
            throw new AppError("Persons_has_Master not exists!");
        }

        await this.persons_has_MasterRepository.delete(idPersons_has_Master);
    }
}

export { DeletePersons_has_MasterUseCase };