using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using OperacaoCuriosidade.Entities;

namespace OperacaoCuriosidade.Persistence
{
    public class DataDbContext : DbContext
    {
        public DataDbContext(DbContextOptions<DataDbContext> options) : base(options)
        {

        }

        public DbSet<Cadastro> Cadastro { get; set; }
        public DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cadastro>(e =>
            {
                e.HasKey(c => c.Id);
                e.Property(c => c.Nome).IsRequired(false).HasMaxLength(150).HasColumnType("nvarchar(150)");
                e.Property(c => c.Email).IsRequired(false).HasMaxLength(150).HasColumnType("nvarchar(150)");
                e.Property(c => c.Atividade).IsRequired(false).HasMaxLength(30).HasColumnType("nvarchar(30)");
                e.Property(c => c.Idade).IsRequired(false).HasColumnType("int");
                e.Property(c => c.Endereco).IsRequired(false).HasMaxLength(250).HasColumnName("Endereço").HasColumnType("nvarchar(250)");
                e.Property(c => c.OutrasInformacoes).IsRequired(false).HasColumnName("Outras Informações").HasMaxLength(250).HasColumnType("nvarchar(250)");
                e.Property(c => c.Endereco).IsRequired(false).HasMaxLength(250).HasColumnType("nvarchar(250)");
                e.Property(c => c.OutrasInformacoes).IsRequired(false).HasMaxLength(250).HasColumnType("nvarchar(250)");
                e.Property(c => c.Interesses).IsRequired(false).HasMaxLength(250).HasColumnType("nvarchar(250)");
                e.Property(c => c.Sentimentos).IsRequired(false).HasMaxLength(250).HasColumnType("nvarchar(250)");
                e.Property(c => c.Valores).IsRequired(false).HasMaxLength(250).HasColumnType("nvarchar(250)");

            });

            modelBuilder.Entity<Usuario>(e =>
            {
                e.HasKey(u => u.Id);
                e.Property(u => u.Nome).IsRequired(false).HasMaxLength(150).HasColumnType("nvarchar(150)");
                e.Property(u => u.Email).IsRequired(false).HasMaxLength(150).HasColumnType("nvarchar(150)");
                e.Property(u => u.Senha).IsRequired(false).HasMaxLength(30).HasColumnType("nvarchar(30)");

            });
        }
    }


}
