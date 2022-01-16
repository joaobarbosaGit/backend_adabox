import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonsHasEnterprise1641304799320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Persons_has_Enterprise",
              columns: [
                {
                  name: "idPersons_has_Enterprise",
                  type: "int",
                  isPrimary: true,
                  isGenerated:true,
                  generationStrategy:"increment"
                },
                {
                  name: "Persons_idPersons",
                  type: "int"
                },
                {
                  name: "Enterprise_idEnterprise",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKPersonsPersons_has_Enterprise",
                  referencedTableName: "Persons",
                  referencedColumnNames: ["idPersons"],
                  columnNames: ["Persons_idPersons"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKEnterprisePersons_has_Enterprise",
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
        await queryRunner.dropTable("Persons_has_Enterprise");
    }

}
