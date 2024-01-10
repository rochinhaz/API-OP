using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OperacaoCuriosidade.Migrations
{
    /// <inheritdoc />
    public partial class AttNomeTabela : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "OutrasInformacoes",
                table: "Cadastro",
                newName: "Outras Informações");

            migrationBuilder.RenameColumn(
                name: "Endereco",
                table: "Cadastro",
                newName: "Endereço");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Outras Informações",
                table: "Cadastro",
                newName: "OutrasInformacoes");

            migrationBuilder.RenameColumn(
                name: "Endereço",
                table: "Cadastro",
                newName: "Endereco");
        }
    }
}
