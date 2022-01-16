import { getRepository, Repository } from "typeorm";

import { IPersons_LocationRepository } from "@modules/persons/repositories/IPersons_LocationRepository";
import { Persons_Location } from "../entities/Persons_Location";
import { IPersons_LocationDTO } from "@modules/persons/dtos/IPersons_LocationDTO";
import { AppError } from "@shared/errors/AppError";

class Persons_LocationRepository implements IPersons_LocationRepository {
  private repository: Repository<Persons_Location>;

  constructor() {
    this.repository = getRepository(Persons_Location);
  }

  async create({
    Address,
    CEP,
    District,
    Number,
    Longitude_Latitude,
    City,
  }: IPersons_LocationDTO): Promise<void> {
    const person_location = this.repository.create({
      Address,
      CEP,
      District,
      Number,
      Longitude_Latitude,
      City,
    });

    await this.repository.save(person_location);
  }

  async update({
    idPersons_Location,
    Address,
    CEP,
    District,
    Number,
    Longitude_Latitude,
    City,
  }: IPersons_LocationDTO): Promise<void> {
    const person_location = await this.repository.findOne(idPersons_Location);

    if (!person_location) {
      throw new AppError("Pessoa nao cadastrada!");
    }

    person_location.Address = Address ? Address : person_location.Address;
    person_location.CEP = CEP ? CEP : person_location.CEP;
    person_location.District = District ? District : person_location.District;
    person_location.Number = Number ? Number : person_location.Number;
    person_location.Longitude_Latitude = Longitude_Latitude
      ? Longitude_Latitude
      : person_location.Longitude_Latitude;
    person_location.City = City ? City : person_location.City;
    await this.repository.save(person_location);
  }

  async findById(idPersons_Location: number): Promise<Persons_Location> {
    const person_location = await this.repository.findOne(idPersons_Location);

    if (!person_location) {
      throw new AppError("Person_Location not exists!");
    }

    return person_location;
  }

  async delete(idPersons_Location: number): Promise<void> {
    await this.repository.delete(idPersons_Location);
  }
}

export { Persons_LocationRepository };
