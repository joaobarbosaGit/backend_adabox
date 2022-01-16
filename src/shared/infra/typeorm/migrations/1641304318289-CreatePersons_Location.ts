import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonsLocation1641304318289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Persons_Location",
              columns: [
                {
                  name: "idPersons_Location",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Address",
                  type: "varchar"
                },
                {
                  name: "CEP",
                  type: "varchar"
                },
                {
                  name: "District",
                  type: "varchar"
                },
                {
                  name: "Number",
                  type: "varchar"
                },
                {
                  name: "Longitude_Latitude",
                  type: "varchar"
                },
                {
                  name: "City",
                  type: "varchar"
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Persons_Location");
    }

}
