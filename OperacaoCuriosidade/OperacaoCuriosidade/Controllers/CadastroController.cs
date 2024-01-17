using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.DataProtection.KeyManagement.Internal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OperacaoCuriosidade.Entities;
using OperacaoCuriosidade.Persistence;
using OperacaoCuriosidade.Interfaces;
using OperacaoCuriosidade.Repository;
using NuGet.Protocol.Core.Types;

/*namespace OperacaoCuriosidade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        private readonly DataDbContext _context;

        public CadastroController(DataDbContext context)
        {
            _context = context;
        }

        // GET: api/Cadastro
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CadastroDTO>>> GetCadastro()
        {
            return await _context.Cadastro.Select(x => CadastroToDTO(x)).ToListAsync();
        }

        // GET: api/Cadastro/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CadastroDTO>> GetCadastro(Guid id)
        {
            var cadastro = await _context.Cadastro.FindAsync(id);

            if (cadastro == null)
            {
                return NotFound();
            }

            return CadastroToDTO(cadastro);
        }

        // GET: api/Cadastro/NOMES?Nome=Jeferson
        [HttpGet("NOMES")]
        public async Task<ActionResult<IEnumerable<CadastroDTO>>> GetCadastro([FromQuery] string Nome)
        {
            var nomes = await _context.Cadastro.Where(n => n.Nome == Nome).ToListAsync();

            if (nomes == null)
            {
                return NotFound();
            }

            return Ok(nomes);
        }

        // GET: api/Cadastro/ContarCadastros
        [HttpGet("ContarCadastros")]
        public async Task<ActionResult<int>> ContarCadastros()
        {
            try
            {
                var quantidadeCadastros = await _context.Cadastro.CountAsync();
                return Ok(quantidadeCadastros);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }


        // PUT: api/Cadastro/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCadastro(Guid id, CadastroDTO cadastroDTO)
        {
            if (id != cadastroDTO.Id)
            {
                return BadRequest();
            }
            var cadastro = await _context.Cadastro.FindAsync(id);
            if (cadastro == null)
            {
                return NotFound();
            }

            cadastro.Nome = cadastroDTO.Nome;
            cadastro.Email = cadastroDTO.Email;
            cadastro.Atividade = cadastroDTO.Atividade;
            cadastro.Idade = cadastroDTO.Idade;
            cadastro.Endereco = cadastroDTO.Endereco;
            cadastro.OutrasInformacoes = cadastroDTO.OutrasInformacoes;
            cadastro.Interesses = cadastroDTO.Interesses;
            cadastro.Sentimentos = cadastroDTO.Sentimentos;
            cadastro.Valores = cadastroDTO.Valores;
            //_context.Entry(cadastro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!CadastroExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/Cadastro
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CadastroDTO>> PostCadastro(CadastroDTO cadastroDTO)
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

            _context.Cadastro.Add(cadastro);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetCadastro),
                new { id = cadastro.Id },
                CadastroToDTO(cadastro));

            /*_context.Cadastro.Add(cadastro);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCadastro), new { id = cadastro.Id }, cadastro);*/
//}

// DELETE: api/Cadastro/5
/*[HttpDelete("{id}")]
public async Task<IActionResult> DeleteCadastro(Guid id)
{
    var cadastro = await _context.Cadastro.FindAsync(id);
    if (cadastro == null)
    {
        return NotFound();
    }

    _context.Cadastro.Remove(cadastro);
    await _context.SaveChangesAsync();

    return NoContent();
}

private bool CadastroExists(Guid id)
{
    return _context.Cadastro.Any(e => e.Id == id);
}

private static CadastroDTO CadastroToDTO(Cadastro cadastro) =>
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

}
}*/


//TESTE COM REPOSITORIE
namespace OperacaoCuriosidade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        private readonly ICadastroRepository _cadastroRepository;
        public CadastroController(ICadastroRepository repository)
        {
            _cadastroRepository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<CadastroDTO>> GetCadastro()
        {
            var cadastro =  await _cadastroRepository.GetCadastro();
            return cadastro.ToList();
        }



        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CadastroDTO>> GetCadastroId(Guid id)
        {
            var cadastro = await _cadastroRepository.GetCadastroId(id);
            if (cadastro == null)
            {
                return NotFound();
            }
            return Ok(cadastro);
        }

        [HttpPost]
        public async Task<IActionResult> PostCadastro([FromBody] CadastroDTO cadastroDTO)

        {
            if (cadastroDTO == null)
            {
                return BadRequest();
            }
            await _cadastroRepository.CriarCadastro(cadastroDTO);
            return CreatedAtAction(nameof(GetCadastro), new { id = cadastroDTO.Id }, cadastroDTO);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCadastro(Guid id, CadastroDTO cadastro)
        {
            if (id != cadastro.Id)
            {
                return BadRequest();
            }
            try
            {
                await _cadastroRepository.AtualizaCadastro(id, cadastro);
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Cadastro>> DeleteCadastro(Guid id)
        {
            var cadastro = await _cadastroRepository.GetCadastroId(id);
            if (cadastro == null)
            {
                return NotFound();
            }
            await _cadastroRepository.DeletaCadastro(id);
            return Ok(cadastro);
        }

        // GET: api/Cadastro/NOMES?Nome=Jeferson
        [HttpGet("NOMES")]
        public async Task<ActionResult<IEnumerable<Cadastro>>> GetCadastroNome([FromQuery] string Nome)
        {
            var nomes =  _cadastroRepository.GetCadastroNome(Nome);

            if (nomes == null)
            {
                return NotFound();
            }

            return Ok(nomes);
        }

        // GET: api/Cadastro/ContarCadastros
        [HttpGet("ContarCadastros")]
        public async Task<ActionResult<int>> ContarCadastros()
        {
            var quantidadeCadastros = await _cadastroRepository.ContarCadastros();
            return Ok(quantidadeCadastros);
        }

        private static CadastroDTO CadastroToDTO(Cadastro cadastro) =>
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
    }
}
