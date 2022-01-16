import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IEnterpriseRepository } from "@modules/entrerprise/repositories/IEntrepriseRepository";
import { Enterprise } from "@modules/entrerprise/infra/entities/Enterprise";

@injectable()
class FindOneEnterpriseUseCase{

    constructor(

    @inject("EnterpriseRepository")
    private enterpriseRepository: IEnterpriseRepository){};

    async execute(idEnterprise: number) : Promise< Enterprise | AppError> {
        
        const entreprise = await this.enterpriseRepository.findById(idEnterprise);

        if(!entreprise){
            throw new AppError("Enterprise not exists!");
        }

        return entreprise;
    }
}

export { FindOneEnterpriseUseCase };