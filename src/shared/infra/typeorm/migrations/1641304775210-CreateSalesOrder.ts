import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSalesOrder1641304775210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Sales_Order",
              columns: [
                {
                  name: "idSales_Order",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Value",
                  type: "double"
                },
                {
                  name: "Id_Seller",
                  type: "int"
                },
                {
                  name: "Id_Client",
                  type: "int"
                },
                {
                  name: "Observations",
                  type: "varchar"
                },
                {
                  name: "Created_at",
                  type: "timestamp",
                  default:"now()"
                },
                {
                  name: "Enterprise_idEnterprise",
                  type: "int"
                },
                {
                  name: "Types_Sales_idTypes_Sales",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKEnterpriseSales_Order",
                  referencedTableName: "Enterprise",
                  referencedColumnNames: ["idEnterprise"],
                  columnNames: ["Enterprise_idEnterprise"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKTypes_SalesSales_Order",
                    referencedTableName: "Types_Sales",
                    referencedColumnNames: ["idTypes_Sales"],
                    columnNames: ["Types_Sales_idTypes_Sales"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Sales_Order");
    }

}
