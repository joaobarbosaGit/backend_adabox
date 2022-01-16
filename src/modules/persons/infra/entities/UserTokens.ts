import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Persons } from "./Persons"

@Entity("users_tokens")
class UserTokens {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  Refresh_token!: string;

  @Column()
  Persons_idPersons!: number;

  @ManyToOne(() => Persons)
  @JoinColumn({ name: "Persons_idPersons" })
  Persons!: Persons;

  @Column()
  Expires_date!: Date;

  @CreateDateColumn()
  Created_at!: Date;

}

export { UserTokens };
