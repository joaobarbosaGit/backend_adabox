import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEnterprise1641304261248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Enterprise",
              columns: [
                {
                  name: "idEnterprise",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Master_idMaster",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKMasterEnterprise",
                  referencedTableName: "Master",
                  referencedColumnNames: ["idMaster"],
                  columnNames: ["Master_idMaster"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Enterprise");
    }

}
