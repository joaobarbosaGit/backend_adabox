import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLogs1641304369097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Logs",
              columns: [
                {
                  name: "idLogs",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Logs");
    }

}
