import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1641304383323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Products",
              columns: [
                {
                  name: "idProducts",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Name_Products",
                  type: "varchar"
                },
                {
                  name: "Description",
                  type: "varchar"
                },
                {
                  name: "Internal_Code",
                  type: "varchar"
                },
                {
                  name: "Bar_Code",
                  type: "varchar",
                  isNullable:true
                },
                {
                  name: "Sell_Value",
                  type: "varchar"
                },
                {
                  name: "Color",
                  type: "varchar",
                  isNullable:true
                },
                {
                  name: "Photograph",
                  type: "varchar",
                  isNullable:true
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Products");
    }

}
