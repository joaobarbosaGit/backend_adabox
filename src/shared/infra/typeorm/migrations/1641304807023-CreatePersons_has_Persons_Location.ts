import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonsHasPersonsLocation1641304807023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Persons_has_Persons_Location",
              columns: [
                {
                  name: "idPersons_has_Persons_Location",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Persons_idPersons",
                  type: "int"
                },
                {
                  name: "Persons_Location_idPersons_Location",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKPersonsPersons_has_Persons_Location",
                  referencedTableName: "Persons",
                  referencedColumnNames: ["idPersons"],
                  columnNames: ["Persons_idPersons"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKPersons_LocationPersons_has_Persons_Location",
                    referencedTableName: "Persons_Location",
                    referencedColumnNames: ["idPersons_Location"],
                    columnNames: ["Persons_Location_idPersons_Location"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Persons_has_Persons_Location");
    }

}
