import { inject, injectable } from "tsyringe";

import { IPersons_has_MasterDTO } from "@modules/persons/dtos/IPersons_has_MasterDTO";
import { IPersons_has_MasterRepository } from "@modules/persons/repositories/IPersons_has_MasterRepository";

@injectable()
class UpdatePersons_has_MasterUseCase{

    constructor(

    @inject("Persons_has_MasterRepository")
    private persons_has_MasterRepository: IPersons_has_MasterRepository){};

    async execute({
        idPersons_has_Master,
        Persons_idPersons,
        Master_idMaster
    }: IPersons_has_MasterDTO) : Promise<void> {

        await this.persons_has_MasterRepository.update({
            idPersons_has_Master,
            Persons_idPersons,
            Master_idMaster
        });
    }
}

export { UpdatePersons_has_MasterUseCase };