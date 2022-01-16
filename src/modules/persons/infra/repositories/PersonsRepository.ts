import { getRepository, Repository } from "typeorm";

import { IPersonsDTO } from "@modules/persons/dtos/IPersonsDTO";
import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";
import { Persons } from "../entities/Persons";
import { AppError } from "@shared/errors/AppError";

class PersonsRepository implements IPersonsRepository {

    private repository: Repository<Persons>;

    constructor(){
        this.repository = getRepository(Persons);
    }
    

    async create({ 
        Name,
        Email,
        Password,
        Telephone_Number,
        RG,
        CPF,
        Profile_idProfile
    }: IPersonsDTO): Promise<void>{
        const person = this.repository.create({
            Name,
            Email,
            Password,
            Telephone_Number,
            RG,
            CPF,
            Profile_idProfile
        });
        
        await this.repository.save(person);
    }

    async update({
        idPersons,
        Name,
        Email,
        Password,
        Telephone_Number,
        RG,
        CPF,
        Profile_idProfile}: IPersonsDTO): Promise<void> {

        const person = await this.repository.findOne(idPersons);

        if(!person){
            throw new AppError("Pessoa nao cadastrada!");
        }

        person.Name = Name ? Name : person.Name;
        person.Email = Email ? Email : person.Email;
        person.Password = Password ? Password : person.Password;
        person.Telephone_Number = Telephone_Number ? Telephone_Number : person.Telephone_Number;
        person.RG = RG ? RG : person.RG;
        person.CPF = CPF ? CPF : person.CPF;
        person.Profile_idProfile = Profile_idProfile ? Profile_idProfile : person.Profile_idProfile;

        await this.repository.save(person);
    }

    async findById(idPersons: number): Promise<Persons> {

        const person = await this.repository.findOne(idPersons);

        if(!person){
            throw new AppError("Persons not exists!");
        }

        return person;
    }
    
    async findByEmail(Email: string): Promise<Persons> {
        const person = await this.repository.findOne({Email});

        if(!person){
            throw new AppError("Persons not exists!");
        }

        return person;
    }

    async findAll(): Promise<Persons[]> {
        const persons = await this.repository.find();

        if(!persons){
            throw new AppError("Persons not exists!");
        }

        return persons;
    }

    async delete(idPersons: number): Promise<void> {

        const person = await this.repository.findOne(idPersons);

        if(!person){
            throw new AppError("Persons not exists!");
        }


        await this.repository.delete(person.idPersons);

    }
}

export { PersonsRepository };