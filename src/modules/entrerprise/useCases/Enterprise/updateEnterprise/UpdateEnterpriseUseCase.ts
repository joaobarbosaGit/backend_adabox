import { inject, injectable } from "tsyringe";

import { IEnterpriseDTO } from "@modules/entrerprise/dtos/IEnterpriseDTO";
import { IEnterpriseRepository } from "@modules/entrerprise/repositories/IEntrepriseRepository";

@injectable()
class UpdateEnterpriseUseCase{

    constructor(

    @inject("EnterpriseRepository")
    private enterpriseRepository: IEnterpriseRepository){};

    async execute({ idEnterprise, Master_idMarter}: IEnterpriseDTO) : Promise<void> {

        await this.enterpriseRepository.update({ idEnterprise, Master_idMarter});
    }
}

export { UpdateEnterpriseUseCase };