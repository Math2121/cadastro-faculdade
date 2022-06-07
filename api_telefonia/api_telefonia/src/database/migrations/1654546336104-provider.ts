import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class provider1654546336104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "provider",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "employee",
                        type: "varchar"
                    },
                    {
                        name: "branch",
                        type: "varchar"
                    },
                    {
                        name: "productType",
                        type: "varchar"
                    },
                    {
                        name: "providerName",
                        type: "varchar"
                    },
                    {
                        name: "costCenter",
                        type: "string"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("provider")
    }

}
