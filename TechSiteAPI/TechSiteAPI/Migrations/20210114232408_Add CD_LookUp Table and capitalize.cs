using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TechSiteAPI.Migrations
{
    public partial class AddCD_LookUpTableandcapitalize : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderProducts_Orders_OrderId",
                table: "OrderProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderProducts_Products_ProductId",
                table: "OrderProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Users_UserId",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Products",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Orders",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_UserId",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderProducts",
                table: "OrderProducts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "CurrentPrice",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ProductNumber",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderDate",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderProductId",
                table: "OrderProducts");

            migrationBuilder.DropColumn(
                name: "PaidPrice",
                table: "OrderProducts");

            migrationBuilder.DropColumn(
                name: "PaidProductName",
                table: "OrderProducts");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "USERS");

            migrationBuilder.RenameTable(
                name: "Products",
                newName: "PRODS");

            migrationBuilder.RenameTable(
                name: "Orders",
                newName: "ORDS");

            migrationBuilder.RenameTable(
                name: "OrderProducts",
                newName: "ODR_PRODS");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "USERS",
                newName: "USERNAME");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "USERS",
                newName: "PASSWORD");

            migrationBuilder.RenameColumn(
                name: "UserEmail",
                table: "USERS",
                newName: "USER_EMAIL");

            migrationBuilder.RenameColumn(
                name: "Stock",
                table: "PRODS",
                newName: "STOCK");

            migrationBuilder.RenameColumn(
                name: "ProductValueType",
                table: "PRODS",
                newName: "PROD_VAL_TYPE_CD");

            migrationBuilder.RenameColumn(
                name: "ProductName",
                table: "PRODS",
                newName: "PROD_NAME");

            migrationBuilder.RenameColumn(
                name: "ProductDescription",
                table: "PRODS",
                newName: "PROD_DESC");

            migrationBuilder.RenameColumn(
                name: "ProductCategory",
                table: "PRODS",
                newName: "PROD_CTGRY_CD");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "ORDS",
                newName: "STATUS_CD");

            migrationBuilder.RenameColumn(
                name: "OrderUUID",
                table: "ORDS",
                newName: "ORD_UUID");

            migrationBuilder.RenameColumn(
                name: "DeliveryAddress",
                table: "ORDS",
                newName: "DLIV_ADRR");

            migrationBuilder.RenameIndex(
                name: "IX_OrderProducts_ProductId",
                table: "ODR_PRODS",
                newName: "IX_ODR_PRODS_ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderProducts_OrderId",
                table: "ODR_PRODS",
                newName: "IX_ODR_PRODS_OrderId");

            migrationBuilder.AddColumn<int>(
                name: "USER_ID",
                table: "USERS",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "PROD_ID",
                table: "PRODS",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<float>(
                name: "CURNT_PRC",
                table: "PRODS",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<int>(
                name: "PROD_NUM",
                table: "PRODS",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ORD_ID",
                table: "ORDS",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<DateTime>(
                name: "ORD_DATE",
                table: "ORDS",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "USER_ID",
                table: "ORDS",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "USER_ID1",
                table: "ORDS",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "ODR_PRODS",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "ODR_PRODS",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ORD_PRD_ID",
                table: "ODR_PRODS",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "ORD_ID",
                table: "ODR_PRODS",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<float>(
                name: "PAID_PRC",
                table: "ODR_PRODS",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "PAID_PROD_NM",
                table: "ODR_PRODS",
                type: "nvarchar(1000)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "PROD_ID",
                table: "ODR_PRODS",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_USERS",
                table: "USERS",
                column: "USER_ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PRODS",
                table: "PRODS",
                column: "PROD_ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ORDS",
                table: "ORDS",
                column: "ORD_ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ODR_PRODS",
                table: "ODR_PRODS",
                column: "ORD_PRD_ID");

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

            migrationBuilder.CreateIndex(
                name: "IX_ORDS_USER_ID1",
                table: "ORDS",
                column: "USER_ID1");

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

            migrationBuilder.AddForeignKey(
                name: "FK_ORDS_USERS_USER_ID1",
                table: "ORDS",
                column: "USER_ID1",
                principalTable: "USERS",
                principalColumn: "USER_ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_ORDS_OrderId",
                table: "ODR_PRODS");

            migrationBuilder.DropForeignKey(
                name: "FK_ODR_PRODS_PRODS_ProductId",
                table: "ODR_PRODS");

            migrationBuilder.DropForeignKey(
                name: "FK_ORDS_USERS_USER_ID1",
                table: "ORDS");

            migrationBuilder.DropTable(
                name: "CD_LKUP");

            migrationBuilder.DropPrimaryKey(
                name: "PK_USERS",
                table: "USERS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PRODS",
                table: "PRODS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ORDS",
                table: "ORDS");

            migrationBuilder.DropIndex(
                name: "IX_ORDS_USER_ID1",
                table: "ORDS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ODR_PRODS",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "USER_ID",
                table: "USERS");

            migrationBuilder.DropColumn(
                name: "PROD_ID",
                table: "PRODS");

            migrationBuilder.DropColumn(
                name: "CURNT_PRC",
                table: "PRODS");

            migrationBuilder.DropColumn(
                name: "PROD_NUM",
                table: "PRODS");

            migrationBuilder.DropColumn(
                name: "ORD_ID",
                table: "ORDS");

            migrationBuilder.DropColumn(
                name: "ORD_DATE",
                table: "ORDS");

            migrationBuilder.DropColumn(
                name: "USER_ID",
                table: "ORDS");

            migrationBuilder.DropColumn(
                name: "USER_ID1",
                table: "ORDS");

            migrationBuilder.DropColumn(
                name: "ORD_PRD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "ORD_ID",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "PAID_PRC",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "PAID_PROD_NM",
                table: "ODR_PRODS");

            migrationBuilder.DropColumn(
                name: "PROD_ID",
                table: "ODR_PRODS");

            migrationBuilder.RenameTable(
                name: "USERS",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "PRODS",
                newName: "Products");

            migrationBuilder.RenameTable(
                name: "ORDS",
                newName: "Orders");

            migrationBuilder.RenameTable(
                name: "ODR_PRODS",
                newName: "OrderProducts");

            migrationBuilder.RenameColumn(
                name: "USERNAME",
                table: "Users",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "PASSWORD",
                table: "Users",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "USER_EMAIL",
                table: "Users",
                newName: "UserEmail");

            migrationBuilder.RenameColumn(
                name: "STOCK",
                table: "Products",
                newName: "Stock");

            migrationBuilder.RenameColumn(
                name: "PROD_VAL_TYPE_CD",
                table: "Products",
                newName: "ProductValueType");

            migrationBuilder.RenameColumn(
                name: "PROD_NAME",
                table: "Products",
                newName: "ProductName");

            migrationBuilder.RenameColumn(
                name: "PROD_DESC",
                table: "Products",
                newName: "ProductDescription");

            migrationBuilder.RenameColumn(
                name: "PROD_CTGRY_CD",
                table: "Products",
                newName: "ProductCategory");

            migrationBuilder.RenameColumn(
                name: "STATUS_CD",
                table: "Orders",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "ORD_UUID",
                table: "Orders",
                newName: "OrderUUID");

            migrationBuilder.RenameColumn(
                name: "DLIV_ADRR",
                table: "Orders",
                newName: "DeliveryAddress");

            migrationBuilder.RenameIndex(
                name: "IX_ODR_PRODS_ProductId",
                table: "OrderProducts",
                newName: "IX_OrderProducts_ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_ODR_PRODS_OrderId",
                table: "OrderProducts",
                newName: "IX_OrderProducts_OrderId");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<float>(
                name: "CurrentPrice",
                table: "Products",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<int>(
                name: "ProductNumber",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<DateTime>(
                name: "OrderDate",
                table: "Orders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "OrderProducts",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderProducts",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OrderProductId",
                table: "OrderProducts",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<float>(
                name: "PaidPrice",
                table: "OrderProducts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "PaidProductName",
                table: "OrderProducts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Products",
                table: "Products",
                column: "ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Orders",
                table: "Orders",
                column: "OrderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderProducts",
                table: "OrderProducts",
                column: "OrderProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderProducts_Orders_OrderId",
                table: "OrderProducts",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderProducts_Products_ProductId",
                table: "OrderProducts",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Users_UserId",
                table: "Orders",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
