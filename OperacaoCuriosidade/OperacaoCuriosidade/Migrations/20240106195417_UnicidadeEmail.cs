using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OperacaoCuriosidade.Migrations
{
    /// <inheritdoc />
    public partial class UnicidadeEmail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Cadastro_Email",
                table: "Cadastro",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Cadastro_Email",
                table: "Cadastro");
        }
    }
}
