namespace OperacaoCuriosidade.Model
{

    public class Cadastro
    {
        public long Id { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string atividade { get; set; }
        public string secret { get; set; }

       /* public Cadastro(string nome, string email, string atividade)
        {
            this.nome = nome;
            this.email = email;
            this.atividade = atividade; 
        }*/
    }   
}
