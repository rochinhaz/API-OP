using OperacaoCuriosidade.Entities;
using OperacaoCuriosidade.Persistence;
using OperacaoCuriosidade.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace OperacaoCuriosidade.Interfaces
{
    public interface ICadastroRepository
    {
        Task<IEnumerable<CadastroDTO>> GetCadastro();
        Task<ActionResult<CadastroDTO>> GetCadastroId(Guid id);
        Task CriarCadastro(CadastroDTO cadastroDTO);
        Task AtualizaCadastro(Guid id, CadastroDTO cadastroDTO);
        Task DeletaCadastro(Guid id);
        Task<ActionResult<int>> ContarCadastros();
        Task GetCadastroNome(string Nome);
    }
}
