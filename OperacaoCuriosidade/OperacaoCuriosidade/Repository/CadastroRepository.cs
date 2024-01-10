using OperacaoCuriosidade.Persistence;
using OperacaoCuriosidade.Entities;
using OperacaoCuriosidade.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OperacaoCuriosidade.Repository
{
    public class CadastroRepository : ICadastroRepository
    {
        private DataDbContext _context;
        public CadastroRepository(DataDbContext context)
        {
            _context = context;
        }

        public bool CadastroExists(Guid id)
        {
            return _context.Cadastro.Any(e => e.Id == id);
        }

        public static CadastroDTO CadastroToDTO(Cadastro cadastro) =>
       new CadastroDTO
       {
           Id = cadastro.Id,
           Nome = cadastro.Nome,
           Email = cadastro.Email,
           Atividade = cadastro.Atividade,
           Idade = cadastro.Idade,
           Endereco = cadastro.Endereco,
           OutrasInformacoes = cadastro.OutrasInformacoes,
           Interesses = cadastro.Interesses,
           Sentimentos = cadastro.Sentimentos,
           Valores = cadastro.Valores
       };

        public async Task<IEnumerable<CadastroDTO>> GetCadastro()
        {
            return await _context.Cadastro.Select(x => CadastroToDTO(x)).ToListAsync();
        }

        public async Task<ActionResult<CadastroDTO>> GetCadastroId(Guid id)
        {
            var cadastro = await _context.Cadastro.FindAsync(id);

            return CadastroToDTO(cadastro);
        }

        public async Task CriarCadastro(CadastroDTO cadastroDTO)
        {
            var cadastro = new Cadastro
            {
                Nome = cadastroDTO.Nome,
                Email = cadastroDTO.Email,
                Atividade = cadastroDTO.Atividade,
                Idade = cadastroDTO.Idade,
                Endereco = cadastroDTO.Endereco,
                OutrasInformacoes = cadastroDTO.OutrasInformacoes,
                Interesses = cadastroDTO.Interesses,
                Sentimentos = cadastroDTO.Sentimentos,
                Valores = cadastroDTO.Valores
            };

            await _context.Cadastro.AddAsync(cadastro);
            await _context.SaveChangesAsync();
        }

        public async Task AtualizaCadastro(Guid id, CadastroDTO cadastroDTO)
        {
            var cadastro = await _context.Cadastro.FindAsync(id);

            cadastro.Nome = cadastroDTO.Nome;
            cadastro.Email = cadastroDTO.Email;
            cadastro.Atividade = cadastroDTO.Atividade;
            cadastro.Idade = cadastroDTO.Idade;
            cadastro.Endereco = cadastroDTO.Endereco;
            cadastro.OutrasInformacoes = cadastroDTO.OutrasInformacoes;
            cadastro.Interesses = cadastroDTO.Interesses;
            cadastro.Sentimentos = cadastroDTO.Sentimentos;
            cadastro.Valores = cadastroDTO.Valores;

            await _context.SaveChangesAsync();
        }

        public async Task DeletaCadastro(Guid id)
        {
            var cadastro = await _context.Cadastro.FindAsync(id);
            _context.Cadastro.Remove(cadastro);
            await _context.SaveChangesAsync();
        }

        public async Task<ActionResult<int>> ContarCadastros()
        {
                var quantidadeCadastros = await _context.Cadastro.CountAsync();
                return quantidadeCadastros;
        }

        public async Task GetCadastroNome(string Nome)
        {
            var nomes = await _context.Cadastro.Where(n => n.Nome == Nome).ToListAsync();
        }
    }
}

