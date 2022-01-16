import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";
import { resolve } from "path";

import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { IPersonsTokensRepository } from "@modules/persons/repositories/IPersonsTokensRepository";
import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository,
    @inject("PersonsTokensRepository")
    private personsTokensRepository: IPersonsTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("MailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const person = await this.personsRepository.findByEmail(email);

    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "views",
      "emails",
      "forgotPassword.hbs"
    );

    if (!person) {
      throw new AppError("User does not exists!");
    }

    const token = uuidV4();

    const Expires_date = this.dateProvider.addHours(3);

    await this.personsTokensRepository.create({
      Refresh_token: token,
      Persons_idPersons: person.idPersons,
      Expires_date,
    });

    const variables = {
      name: person.Name,
      link: `${process.env.FORGOT_MAIL_URL}${token}`,
    };

    await this.mailProvider.sendMail(
      email,
      "Recuperação de Senha",
      variables,
      templatePath
    );
  }
}

export { SendForgotPasswordMailUseCase };
