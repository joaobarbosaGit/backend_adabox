import { inject, injectable } from "tsyringe";

import { IPersons_has_EnterpriseDTO } from "@modules/persons/dtos/IPersons_EnterpriseDTO";
import { IPersons_has_EnterpriseRepository } from "@modules/persons/repositories/IPersons_has_EnterpriseRepository";

@injectable()
class UpdatePersons_has_EnterpriseUseCase{

    constructor(

    @inject("Persons_has_EnterpriseRepository")
    private persons_has_EnterpriseRepository: IPersons_has_EnterpriseRepository){};

    async execute({
        idPersons_has_Enterprise,
        Persons_idPersons,
        Enterprise_idEnterprise
    }: IPersons_has_EnterpriseDTO) : Promise<void> {

        await this.persons_has_EnterpriseRepository.update({
            idPersons_has_Enterprise,
            Persons_idPersons,
            Enterprise_idEnterprise
        });
    }
}

export { UpdatePersons_has_EnterpriseUseCase };