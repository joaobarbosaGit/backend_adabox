import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import auth from "@config/auth";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IPersonsTokensRepository } from "@modules/persons/repositories/IPersonsTokensRepository";
import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";

interface IRequest {
  Email: string;
  Password: string;
}

interface IResponse {
  Persons: {
    Name: string;
    Email: string;
  };
  Token: string;
  Refresh_token: string;
}

@injectable()
class AuthenticatePersonsUseCase {
  constructor(
    @inject("PersonsRepository")
    private personsRepository: IPersonsRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IPersonsTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ Email, Password }: IRequest): Promise<IResponse> {
    const person = await this.personsRepository.findByEmail(Email);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    if (!person) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(Password, person.Password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const Token = sign({}, secret_token, {
      subject: String(person.idPersons),
      expiresIn: expires_in_token,
    });

    const Refresh_token = sign({ Email }, secret_refresh_token, {
      subject: String(person.idPersons),
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_refresh_token_days
    );

    await this.usersTokensRepository.create({
      Persons_idPersons: person.idPersons,
      Refresh_token,
      Expires_date: refresh_token_expires_date,
    });

    const tokenReturn: IResponse = {
      Token,
      Persons: {
        Name: person.Name,
        Email: person.Email,
      },
      Refresh_token,
    };

    return tokenReturn;
  }
}

export { AuthenticatePersonsUseCase };
