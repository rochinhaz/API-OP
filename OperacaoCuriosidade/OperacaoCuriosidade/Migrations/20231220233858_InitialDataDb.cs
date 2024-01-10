using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OperacaoCuriosidade.Migrations
{
    /// <inheritdoc />
    public partial class InitialDataDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cadastro",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Atividade = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Idade = table.Column<int>(type: "int", nullable: true),
                    Endereco = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    OutrasInformacoes = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Interesses = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Sentimentos = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Valores = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    Secret = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cadastro", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Senha = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Secret = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cadastro");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
