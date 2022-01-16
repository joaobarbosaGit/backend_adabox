interface ICreateUserTokenDTO {
  Persons_idPersons: number;
  Expires_date: Date;
  Refresh_token: string;
}

export { ICreateUserTokenDTO };
