import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStorage1641304358316 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Storage",
              columns: [
                {
                  name: "idStorage",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Storage");
    }

}
