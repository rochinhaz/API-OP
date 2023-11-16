using Microsoft.EntityFrameworkCore;

namespace OperacaoCuriosidade.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
        {
        }

        public DbSet<Cadastro> Cadastro { get; set; } = null!;
    }
}
