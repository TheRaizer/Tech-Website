using Microsoft.EntityFrameworkCore.Migrations;

namespace TechSiteAPI.Migrations
{
    public partial class Renameforeignkeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_ORDS_OrderId",
                table: "ODR_PRODS");

            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_PRODS_ProductId",
                table: "ODR_PRODS");

            migrationBuilder.DropIndex(
                name: "IX_ODR_PRODS_OrderId",
                table: "ODR_PRODS");

            migrationBuilder.DropIndex(
                name: "IX_ODR_PRODS_ProductId",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "ODR_PRODS");

            migrationBuilder.CreateIndex(
                name: "IX_ODR_PRODS_ORD_ID",
                table: "ODR_PRODS",
                column: "ORD_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ODR_PRODS_PROD_ID",
                table: "ODR_PRODS",
                column: "PROD_ID");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_ORDS_ORD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_PRODS_PROD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropIndex(
                name: "IX_ODR_PRODS_ORD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropIndex(
                name: "IX_ODR_PRODS_PROD_ID",
                table: "ODR_PRODS");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "ODR_PRODS",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "ODR_PRODS",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ODR_PRODS_OrderId",
                table: "ODR_PRODS",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_ODR_PRODS_ProductId",
                table: "ODR_PRODS",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_ODR_PRODS_ORDS_OrderId",
                table: "ODR_PRODS",
                column: "OrderId",
                principalTable: "ORDS",
                principalColumn: "ORD_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ODR_PRODS_PRODS_ProductId",
                table: "ODR_PRODS",
                column: "ProductId",
                principalTable: "PRODS",
                principalColumn: "PROD_ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
