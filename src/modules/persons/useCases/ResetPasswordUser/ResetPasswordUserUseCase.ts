import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IPersonsTokensRepository } from "@modules/persons/repositories/IPersonsTokensRepository";
import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject("PersonsTokensRepository")
    private personsTokensRepository: IPersonsTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository
  ) {}
  async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.personsTokensRepository.findByRefreshToken(
      token
    );

    if (!userToken) {
      throw new AppError("Token invalid!");
    }

    if (
      this.dateProvider.compareIfBefore(
        userToken.Expires_date,
        this.dateProvider.dateNow()
      )
    ) {
      throw new AppError("Token expired!");
    }

    const person = await this.personsRepository.findById(userToken.Persons_idPersons);

    person.Password = await hash(password, 8);

    await this.personsRepository.create(person);

    await this.personsTokensRepository.deleteById(userToken.id);
  }
}

export { ResetPasswordUserUseCase };
