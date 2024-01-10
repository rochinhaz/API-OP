using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OperacaoCuriosidade.Migrations
{
    /// <inheritdoc />
    public partial class TesteDTO : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Secret",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "Secret",
                table: "Cadastro");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Secret",
                table: "Usuario",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Secret",
                table: "Cadastro",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
