using Microsoft.EntityFrameworkCore;

namespace OperacaoCuriosidade.Model
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) 
        {
        }

        public DbSet<Cadastro> Cadastro { get; set; } = null!;
    }
}
