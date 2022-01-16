import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsHasProductsAtributes1641304842416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Products_has_Products_Atributes",
              columns: [
                {
                  name: "idProducts_has_Products_Atributes",
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
                  name: "Products_Atributes_idProducts_Atributes",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKProductsProducts_has_Products_Atributes",
                  referencedTableName: "Products",
                  referencedColumnNames: ["idProducts"],
                  columnNames: ["Products_idProducts"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKProducts_AtributesProducts_has_Products_Atributes",
                    referencedTableName: "Products_Atributes",
                    referencedColumnNames: ["idProducts_Atributes"],
                    columnNames: ["Products_Atributes_idProducts_Atributes"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Products_has_Products_Atributes");
    }

}
