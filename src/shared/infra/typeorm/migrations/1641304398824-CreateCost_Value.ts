import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCostValue1641304398824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Cost_Value",
              columns: [
                {
                  name: "idCost_Value",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Cost_Value",
                  type: "double"
                },
                {
                  name: "Created_at",
                  type: "timestamp",
                  default:"now()"
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Cost_Value");
    }

}
