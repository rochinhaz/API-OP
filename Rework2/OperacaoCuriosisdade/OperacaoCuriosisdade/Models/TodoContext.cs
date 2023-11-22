using Microsoft.EntityFrameworkCore;

namespace OperacaoCuriosisdade.Models
{

        public class TodoContext : DbContext
        {
            public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
            {
            }

            public DbSet<Cadastro> Cadastro { get; set; } = null!;
            public DbSet<Usuario> Usuario { get; set; } = null!;

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<Usuario>()
                    .HasMany(e => e.Cadastro)
                    .WithOne(e => e.Usuario)
                    .HasForeignKey(e => e.UsuarioId)
                    .HasPrincipalKey(e => e.Id);
            }
        }
}
