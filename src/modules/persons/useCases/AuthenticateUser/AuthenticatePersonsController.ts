import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticatePersonsUseCase } from "./AuthenticatePersonsUseCase";

class AuthenticatePersonsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { Password, Email } = request.body;

    const authenticatePersonsUseCase = container.resolve(AuthenticatePersonsUseCase);

    const token = await authenticatePersonsUseCase.execute({
      Password,
      Email,
    });

    return response.json(token);
  }
}

export { AuthenticatePersonsController };
