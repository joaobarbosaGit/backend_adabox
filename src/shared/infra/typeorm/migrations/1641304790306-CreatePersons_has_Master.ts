import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonsHasMaster1641304790306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Persons_has_Master",
              columns: [
                {
                  name: "idPersons_has_Master",
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
                  name: "Master_idMaster",
                  type: "int"
                }
              ],
              foreignKeys: [
                {
                  name: "FKPersonsPersons_has_Master",
                  referencedTableName: "Persons",
                  referencedColumnNames: ["idPersons"],
                  columnNames: ["Persons_idPersons"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                    name: "FKMasterPersons_has_Master",
                    referencedTableName: "Master",
                    referencedColumnNames: ["idMaster"],
                    columnNames: ["Master_idMaster"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Persons_has_Master");
    }

}
