using Microsoft.EntityFrameworkCore.Migrations;

namespace TechSiteAPI.Migrations
{
    public partial class ChangedForeignkeyannotationinOrderreftoOrderProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ORD_PRODS_ORDS_ORDER_ID",
                table: "ORD_PRODS");

            migrationBuilder.DropIndex(
                name: "IX_ORD_PRODS_ORDER_ID",
                table: "ORD_PRODS");

            migrationBuilder.DropColumn(
                name: "ORDER_ID",
                table: "ORD_PRODS");

            migrationBuilder.CreateIndex(
                name: "IX_ORD_PRODS_ORD_ID",
                table: "ORD_PRODS",
                column: "ORD_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ORD_PRODS_ORDS_ORD_ID",
                table: "ORD_PRODS",
                column: "ORD_ID",
                principalTable: "ORDS",
                principalColumn: "ORD_ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ORD_PRODS_ORDS_ORD_ID",
                table: "ORD_PRODS");

            migrationBuilder.DropIndex(
                name: "IX_ORD_PRODS_ORD_ID",
                table: "ORD_PRODS");

            migrationBuilder.AddColumn<int>(
                name: "ORDER_ID",
                table: "ORD_PRODS",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ORD_PRODS_ORDER_ID",
                table: "ORD_PRODS",
                column: "ORDER_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ORD_PRODS_ORDS_ORDER_ID",
                table: "ORD_PRODS",
                column: "ORDER_ID",
                principalTable: "ORDS",
                principalColumn: "ORD_ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
