import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePersons_LocationUseCase } from "./CreatePersons_LocationUseCase";

class CreatePersons_LocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { Address, CEP, District, Number, Longitude_Latitude, City } =
      request.body;

    const createPersons_LocationUseCase = container.resolve(
      CreatePersons_LocationUseCase
    );

    await createPersons_LocationUseCase.execute({
      Address,
      CEP,
      District,
      Number,
      Longitude_Latitude,
      City,
    });

    return response.status(201).send();
  }
}

export { CreatePersons_LocationController };
