import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsHasCategories1641304850019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Products_has_Categories",
              columns: [
                {
                  name: "idProducts_has_Categories",
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
                  name: "Categories_idCategories",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKProductsProducts_has_Categories",
                  referencedTableName: "Products",
                  referencedColumnNames: ["idProducts"],
                  columnNames: ["Products_idProducts"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKCategoriesProducts_has_Categories",
                    referencedTableName: "Categories",
                    referencedColumnNames: ["idCategories"],
                    columnNames: ["Categories_idCategories"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Products_has_Categories");
    }

}
