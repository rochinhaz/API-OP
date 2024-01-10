using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace OperacaoCuriosidade.Entities
{
    [Index(nameof(Email), IsUnique = true)]
    public class Cadastro
    {
        public Guid Id { get; set; }
        public string? Nome { get; set; }
        public string Email { get; set; }
        public string? Atividade { get; set; }
        public int? Idade { get; set; }
        public string? Endereco { get; set; }
        public string? OutrasInformacoes { get; set; }
        public string? Interesses { get; set; }
        public string? Sentimentos { get; set; }
        public string? Valores { get; set; }
    }
}
