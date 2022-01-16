import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersons1641304306090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Persons",
              columns: [
                {
                  name: "idPersons",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                    name:"Name",
                    type:"varchar"
                },
                {
                    name:"Email",
                    type:"varchar"
                },
                {
                    name:"Password",
                    type:"varchar"
                },
                {
                    name:"Telephone_Number",
                    type:"varchar"
                },
                {
                    name:"RG",
                    type:"varchar"
                },
                {
                    name:"CPF",
                    type:"varchar"
                },
                {
                    name:"Profile_idProfile",
                    type:"int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKProfilePersons",
                  referencedTableName: "Profile",
                  referencedColumnNames: ["idProfile"],
                  columnNames: ["Profile_idProfile"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Persons");
    }

}
