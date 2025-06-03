import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1748920770893 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE recetas (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                nombre VARCHAR(255) NOT NULL,
                tiempo_preparacion INTEGER NOT NULL,
                ingredientes TEXT ARRAY
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE receta`);
    }
}