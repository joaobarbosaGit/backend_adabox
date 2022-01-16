import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStorageHasEnterprise1641304814173 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Storage_has_Enterprise",
              columns: [
                {
                  name: "idStorage_has_Enterprise",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Storage_idStorage",
                  type: "int"
                },
                {
                  name: "Enterprise_idEnterprise",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKStorageStorage_has_Enterprise",
                  referencedTableName: "Storage",
                  referencedColumnNames: ["idStorage"],
                  columnNames: ["Storage_idStorage"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKEnterpriseStorage_has_Enterprise",
                    referencedTableName: "Enterprise",
                    referencedColumnNames: ["idEnterprise"],
                    columnNames: ["Enterprise_idEnterprise"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Storage_has_Enterprise");
    }

}
