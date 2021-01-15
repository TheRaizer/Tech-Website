using Microsoft.EntityFrameworkCore.Migrations;

namespace TechSiteAPI.Migrations
{
    public partial class FixedtypoinORD_PRODStablename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_ORDS_ORD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_PRODS_PROD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ODR_PRODS",
                table: "ODR_PRODS");

            migrationBuilder.RenameTable(
                name: "ODR_PRODS",
                newName: "ORD_PRODS");

            migrationBuilder.RenameIndex(
                name: "IX_ODR_PRODS_PROD_ID",
                table: "ORD_PRODS",
                newName: "IX_ORD_PRODS_PROD_ID");

            migrationBuilder.RenameIndex(
                name: "IX_ODR_PRODS_ORD_ID",
                table: "ORD_PRODS",
                newName: "IX_ORD_PRODS_ORD_ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ORD_PRODS",
                table: "ORD_PRODS",
                column: "ORD_PRD_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ORD_PRODS_ORDS_ORD_ID",
                table: "ORD_PRODS",
                column: "ORD_ID",
                principalTable: "ORDS",
                principalColumn: "ORD_ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ORD_PRODS_PRODS_PROD_ID",
                table: "ORD_PRODS",
                column: "PROD_ID",
                principalTable: "PRODS",
                principalColumn: "PROD_ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ORD_PRODS_ORDS_ORD_ID",
                table: "ORD_PRODS");

            migrationBuilder.DropForeignKey(
                name: "FK_ORD_PRODS_PRODS_PROD_ID",
                table: "ORD_PRODS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ORD_PRODS",
                table: "ORD_PRODS");

            migrationBuilder.RenameTable(
                name: "ORD_PRODS",
                newName: "ODR_PRODS");

            migrationBuilder.RenameIndex(
                name: "IX_ORD_PRODS_PROD_ID",
                table: "ODR_PRODS",
                newName: "IX_ODR_PRODS_PROD_ID");

            migrationBuilder.RenameIndex(
                name: "IX_ORD_PRODS_ORD_ID",
                table: "ODR_PRODS",
                newName: "IX_ODR_PRODS_ORD_ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ODR_PRODS",
                table: "ODR_PRODS",
                column: "ORD_PRD_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ODR_PRODS_ORDS_ORD_ID",
                table: "ODR_PRODS",
                column: "ORD_ID",
                principalTable: "ORDS",
                principalColumn: "ORD_ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ODR_PRODS_PRODS_PROD_ID",
                table: "ODR_PRODS",
                column: "PROD_ID",
                principalTable: "PRODS",
                principalColumn: "PROD_ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
