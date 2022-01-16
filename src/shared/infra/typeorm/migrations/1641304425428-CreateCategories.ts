import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1641304425428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Categories",
              columns: [
                {
                  name: "idCategories",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Name_Category",
                  type: "varchar"
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Categories");
    }

}
