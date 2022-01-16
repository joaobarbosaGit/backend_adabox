import { getRepository, Repository } from "typeorm";

import { IPersonsTokensRepository } from "@modules/persons/repositories/IPersonsTokensRepository";
import { UserTokens } from "../entities/UserTokens";
import { ICreateUserTokenDTO } from "@modules/persons/dtos/ICreateUserTokenDTO";

class PersonsTokensRepository implements IPersonsTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    Expires_date,
    Refresh_token,
    Persons_idPersons,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      Expires_date,
      Refresh_token,
      Persons_idPersons,
    });

    await this.repository.save(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    Persons_idPersons: number,
    Refresh_token: string
  ): Promise<UserTokens> {
    const usersTokens = await this.repository.findOne({
      Persons_idPersons,
      Refresh_token,
    });
    return usersTokens;
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findByRefreshToken(Refresh_token: string): Promise<UserTokens> {
    const userToken = await this.repository.findOne({ Refresh_token });

    return userToken;
  }
}

export { PersonsTokensRepository };
