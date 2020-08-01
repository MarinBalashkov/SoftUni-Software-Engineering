using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace P03_SalesDatabase.Migrations
{
    public partial class Finaldatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Sales",
                type: "DATETIME2",
                nullable: false,
                defaultValueSql: "GETDATE()",
                oldClrType: typeof(DateTime),
                oldDefaultValueSql: "GETDATE()");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Customers",
                unicode: false,
                maxLength: 80,
                nullable: false,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 80,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CreditCardNumber",
                table: "Customers",
                unicode: false,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Sales",
                nullable: false,
                defaultValueSql: "GETDATE()",
                oldClrType: typeof(DateTime),
                oldType: "DATETIME2",
                oldDefaultValueSql: "GETDATE()");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Customers",
                unicode: false,
                maxLength: 80,
                nullable: true,
                oldClrType: typeof(string),
                oldUnicode: false,
                oldMaxLength: 80);

            migrationBuilder.AlterColumn<string>(
                name: "CreditCardNumber",
                table: "Customers",
                nullable: true,
                oldClrType: typeof(string),
                oldUnicode: false);
        }
    }
}
