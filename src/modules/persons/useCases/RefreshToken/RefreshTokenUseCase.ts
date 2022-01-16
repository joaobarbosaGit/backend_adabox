import { inject, injectable } from "tsyringe";
import { verify, sign } from "jsonwebtoken";

import auth from "@config/auth";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IPersonsTokensRepository } from "@modules/persons/repositories/IPersonsTokensRepository";

interface IPayload {
  sub: string;
  email: string;
}

interface ITokenResponse {
  token: string;
  Refresh_token: string;
}

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IPersonsTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(token: string): Promise<ITokenResponse> {
    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;

    const Persons_idPersons = parseInt(sub);

    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(
      Persons_idPersons,
      token
    );

    if (!userToken) {
      throw new AppError("Refresh Token does not exists!");
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const Refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: auth.expires_in_refresh_token,
    });

    const Expires_date = this.dateProvider.addDays(
      auth.expires_refresh_token_days
    );

    await this.usersTokensRepository.create({
      Expires_date,
      Refresh_token,
      Persons_idPersons,
    });

    const newToken = sign({}, auth.secret_token, {
      subject: String(Persons_idPersons),
      expiresIn: auth.expires_in_token,
    });

    return {
      Refresh_token,
      token: newToken,
    };
  }
}

export { RefreshTokenUseCase };
