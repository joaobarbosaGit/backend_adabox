import { inject, injectable } from "tsyringe";

import { IPersons_LocationDTO } from "@modules/persons/dtos/IPersons_LocationDTO";
import { IPersons_LocationRepository } from "@modules/persons/repositories/IPersons_LocationRepository";

@injectable()
class CreatePersons_LocationUseCase {
  constructor(
    @inject("Persons_LocationRepository")
    private persons_LocationRepository: IPersons_LocationRepository
  ) {}

  async execute({
    Address,
    CEP,
    District,
    Number,
    Longitude_Latitude,
    City
  }: IPersons_LocationDTO): Promise<void> {
    await this.persons_LocationRepository.create({
      Address,
      CEP,
      District,
      Number,
      Longitude_Latitude,
      City
    });
  }
}

export { CreatePersons_LocationUseCase };
