import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTypesSales1641304348680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Types_Sales",
              columns: [
                {
                  name: "idTypes_Sales",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Description",
                  type: "varchar"
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Types_Sales");
    }

}
