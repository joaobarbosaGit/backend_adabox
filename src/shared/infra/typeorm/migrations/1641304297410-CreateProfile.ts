import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfile1641304297410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Profile",
              columns: [
                {
                  name: "idProfile",
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
        await queryRunner.dropTable("Profile");
    }
}
