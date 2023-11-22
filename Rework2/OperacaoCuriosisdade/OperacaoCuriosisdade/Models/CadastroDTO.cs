namespace OperacaoCuriosisdade.Models
{
    public class CadastroDTO
    {
        public long Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public Usuario? Usuario { get; set; }
        public string? Atividade { get; set; }
        public int UsuarioId { get; set; }
    }
}
