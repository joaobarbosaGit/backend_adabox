import { inject, injectable } from "tsyringe";

import { IEnterpriseDTO } from "@modules/entrerprise/dtos/IEnterpriseDTO";
import { IEnterpriseRepository } from "@modules/entrerprise/repositories/IEntrepriseRepository";


@injectable()
class CreateEnterpriseUseCase{

    constructor(

    @inject("EnterpriseRepository")
    private enterpriseRepository: IEnterpriseRepository){};

    async execute({ Master_idMaster }: IEnterpriseDTO) : Promise<void> {

        await this.enterpriseRepository.create({Master_idMaster});
    }
}

export { CreateEnterpriseUseCase };