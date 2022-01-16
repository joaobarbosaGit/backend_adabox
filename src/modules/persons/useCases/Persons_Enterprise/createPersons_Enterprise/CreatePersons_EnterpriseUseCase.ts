import { IPersons_has_EnterpriseDTO } from "@modules/persons/dtos/IPersons_EnterpriseDTO";
import { IPersons_has_EnterpriseRepository } from "@modules/persons/repositories/IPersons_has_EnterpriseRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePersons_has_EnterpriseUseCase{

    constructor(

    @inject("Persons_has_EnterpriseRepository")
    private persons_has_EnterpriseRepository: IPersons_has_EnterpriseRepository){};

    async execute({
        Persons_idPersons,
        Enterprise_idEnterprise
    }: IPersons_has_EnterpriseDTO) : Promise<void> {

        await this.persons_has_EnterpriseRepository.create({
            Persons_idPersons,
            Enterprise_idEnterprise
        });
    }
}

export { CreatePersons_has_EnterpriseUseCase };