import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSalesOrderHasProducts1641304828293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Sales_Order_has_Products",
              columns: [
                {
                  name: "idSales_Order_has_Products",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Sales_Order_idSales_Order",
                  type: "int"
                },
                {
                  name: "Products_idProducts",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKSales_OrderSales_Order_has_Products",
                  referencedTableName: "Sales_Order",
                  referencedColumnNames: ["idSales_Order"],
                  columnNames: ["Sales_Order_idSales_Order"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKProductsSales_Order_has_Products",
                    referencedTableName: "Products",
                    referencedColumnNames: ["idProducts"],
                    columnNames: ["Products_idProducts"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Sales_Order_has_Products");
    }

}
