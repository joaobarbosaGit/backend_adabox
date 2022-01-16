import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsHasStorage1641304821345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Products_has_Storage",
              columns: [
                {
                  name: "idProducts_has_Storage",
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
                  name: "Storage_idStorage",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKProductsProducts_has_Storage",
                  referencedTableName: "Products",
                  referencedColumnNames: ["idProducts"],
                  columnNames: ["Products_idProducts"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKStorageProducts_has_Storage",
                    referencedTableName: "Storage",
                    referencedColumnNames: ["idStorage"],
                    columnNames: ["Storage_idStorage"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Products_has_Storage");
    }

}
