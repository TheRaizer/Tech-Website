using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TechSiteAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CD_LKUP",
                columns: table => new
                {
                    CD_VAL = table.Column<int>(nullable: false),
                    TYPE = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    DESC = table.Column<string>(type: "nvarchar(MAX)", nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "PRODS",
                columns: table => new
                {
                    PROD_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    STOCK = table.Column<int>(nullable: false),
                    CURNT_PRC = table.Column<float>(nullable: false),
                    PROD_NUM = table.Column<int>(nullable: false),
                    PROD_NAME = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    PROD_DESC = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    PROD_CTGRY_CD = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    PROD_VAL_TYPE_CD = table.Column<string>(type: "nvarchar(16)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PRODS", x => x.PROD_ID);
                });

            migrationBuilder.CreateTable(
                name: "USERS",
                columns: table => new
                {
                    USER_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    USER_EMAIL = table.Column<string>(type: "nvarchar(320)", nullable: true),
                    USERNAME = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    PASSWORD = table.Column<string>(type: "nvarchar(12)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USERS", x => x.USER_ID);
                });

            migrationBuilder.CreateTable(
                name: "ORDS",
                columns: table => new
                {
                    ORD_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    USER_ID = table.Column<int>(nullable: false),
                    ORD_DATE = table.Column<DateTime>(nullable: false),
                    STATUS_CD = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    DLIV_ADRR = table.Column<string>(type: "nvarchar(200)", nullable: false),
                    ORD_UUID = table.Column<string>(type: "nvarchar(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ORDS", x => x.ORD_ID);
                    table.ForeignKey(
                        name: "FK_ORDS_USERS_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "USERS",
                        principalColumn: "USER_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ODR_PRODS",
                columns: table => new
                {
                    ORD_PRD_ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PROD_ID = table.Column<int>(nullable: false),
                    ORD_ID = table.Column<int>(nullable: false),
                    PAID_PRC = table.Column<float>(nullable: false),
                    PAID_PROD_NM = table.Column<string>(type: "nvarchar(1000)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ODR_PRODS", x => x.ORD_PRD_ID);
                    table.ForeignKey(
                        name: "FK_ODR_PRODS_ORDS_ORD_ID",
                        column: x => x.ORD_ID,
                        principalTable: "ORDS",
                        principalColumn: "ORD_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ODR_PRODS_PRODS_PROD_ID",
                        column: x => x.PROD_ID,
                        principalTable: "PRODS",
                        principalColumn: "PROD_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ODR_PRODS_ORD_ID",
                table: "ODR_PRODS",
                column: "ORD_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ODR_PRODS_PROD_ID",
                table: "ODR_PRODS",
                column: "PROD_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ORDS_USER_ID",
                table: "ORDS",
                column: "USER_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CD_LKUP");

            migrationBuilder.DropTable(
                name: "ODR_PRODS");

            migrationBuilder.DropTable(
                name: "ORDS");

            migrationBuilder.DropTable(
                name: "PRODS");

            migrationBuilder.DropTable(
                name: "USERS");
        }
    }
}
