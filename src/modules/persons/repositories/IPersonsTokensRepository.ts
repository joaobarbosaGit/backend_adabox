import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/entities/UserTokens";

interface IPersonsTokensRepository {
  create({
    Expires_date,
    Refresh_token,
    Persons_idPersons,
  }: ICreateUserTokenDTO): Promise<UserTokens>;

  findByUserIdAndRefreshToken(
    Persons_idPersons: number,
    Refresh_token: string
  ): Promise<UserTokens>;

  deleteById(id: number): Promise<void>;

  findByRefreshToken(Refresh_token: string): Promise<UserTokens>;
}

export { IPersonsTokensRepository };
