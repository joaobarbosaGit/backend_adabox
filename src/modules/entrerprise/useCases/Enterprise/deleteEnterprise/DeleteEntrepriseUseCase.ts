import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IEnterpriseRepository } from "@modules/entrerprise/repositories/IEntrepriseRepository";

@injectable()
class DeleteEnterpriseUseCase{

    constructor(

    @inject("EnterpriseRepository")
    private enterpriseRepository: IEnterpriseRepository){};

    async execute(idEnterprise: number) : Promise<void | AppError> {
        
        const person = await this.enterpriseRepository.findById(idEnterprise);

        if(!person){
            throw new AppError("Enterprise not exists!");
        }

        await this.enterpriseRepository.delete(idEnterprise);
    }
}

export { DeleteEnterpriseUseCase };