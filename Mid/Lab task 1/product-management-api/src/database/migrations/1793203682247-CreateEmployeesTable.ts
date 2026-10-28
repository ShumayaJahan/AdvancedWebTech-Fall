import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmployeesTable1793203682247 implements MigrationInterface {
  name = "CreateEmployeesTable1793203682247";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "employees" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "phone" character varying NOT NULL,
        "password" character varying NOT NULL,
        "age" integer NOT NULL,
        "years_of_working" integer NOT NULL,
        CONSTRAINT "PK_employees_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "employees"`);
  }
}
