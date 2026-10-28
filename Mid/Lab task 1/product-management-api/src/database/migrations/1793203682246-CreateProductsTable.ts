import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1793203682246 implements MigrationInterface {
  name = "CreateProductsTable1793203682246";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "products" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "category" character varying NOT NULL,
        "price" numeric(10,2) NOT NULL,
        "quantity" integer NOT NULL,
        CONSTRAINT "PK_products_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
