import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UsersToken1641304915287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Users_Tokens",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy: "increment"
                },
                {
                  name: "Refresh_token",
                  type: "varchar",
                },
                {
                  name: "Persons_idPersons",
                  type: "int",
                },
                {
                  name: "Expires_date",
                  type: "timestamp",
                },
                {
                  name: "Created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                  name: "FKPersonsToken",
                  referencedTableName: "Persons",
                  referencedColumnNames: ["idPersons"],
                  columnNames: ["Persons_idPersons"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_tokens");
    }

}
