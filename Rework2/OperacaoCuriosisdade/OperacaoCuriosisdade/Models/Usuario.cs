namespace OperacaoCuriosisdade.Models
{
    public class Usuario
    {
        public long Id { get; set; }
        public string? Email { get; set; }
        public string? Senha { get; set; }
        public ICollection<Cadastro> Cadastro { get;  }
        public string? Secret { get; set; }
    }
}
