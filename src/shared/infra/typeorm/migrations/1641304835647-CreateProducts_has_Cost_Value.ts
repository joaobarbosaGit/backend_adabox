import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsHasCostValue1641304835647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Products_has_Cost_Value",
              columns: [
                {
                  name: "idProducts_has_Cost_Value",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Products_idProducts",
                  type: "int"
                },
                {
                  name: "Cost_Value_idCost_Value",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKProductsProducts_has_Cost_Value",
                  referencedTableName: "Products",
                  referencedColumnNames: ["idProducts"],
                  columnNames: ["Products_idProducts"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKCost_ValueProducts_has_Cost_Value",
                    referencedTableName: "Cost_Value",
                    referencedColumnNames: ["idCost_Value"],
                    columnNames: ["Cost_Value_idCost_Value"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Products_has_Cost_Value");
    }

}
