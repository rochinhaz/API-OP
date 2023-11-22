namespace OperacaoCuriosisdade.Models
{
    public class Cadastro
    {
        public long Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Atividade { get; set; }
        public Usuario? Usuario { get; set; }
        public string? Secret { get; set; }
        public int UsuarioId { get; set; }
    }
}
