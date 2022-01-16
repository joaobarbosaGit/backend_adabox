import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsAtributes1641304415721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Products_Atributes",
              columns: [
                {
                  name: "idProducts_Atributes",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Weight",
                  type: "double"
                },
                {
                  name: "Width",
                  type: "double"
                },
                {
                  name: "Height",
                  type: "double"
                },
                {
                  name: "Length",
                  type: "double"
                },
                {
                  name: "Types_Sales_idTypes_Sales",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKTypes_SalesProducts_Atributes",
                  referencedTableName: "Types_Sales",
                  referencedColumnNames: ["idTypes_Sales"],
                  columnNames: ["Types_Sales_idTypes_Sales"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Products_Atributes");
    }

}
