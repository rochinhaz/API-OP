using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OperacaoCuriosisdade.Models;

namespace OperacaoCuriosisdade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        private readonly TodoContext _context;

        public CadastroController(TodoContext context)
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
        public async Task<ActionResult<CadastroDTO>> GetCadastro(long id)
        {
            var cadastro = await _context.Cadastro.FindAsync(id);

            if (cadastro == null)
            {
                return NotFound();
            }

            return CadastroToDTO(cadastro);
        }

        // PUT: api/Cadastro/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCadastro(long id, CadastroDTO cadastroDTO)
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
            //cadastro.Usuario = cadastroDTO.Usuario;
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
                Atividade = cadastroDTO.Atividade
                //Usuario = cadastroDTO.Usuario
            };

            _context.Cadastro.Add(cadastro);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetCadastro),
                new { id = cadastro.Id },
                CadastroToDTO(cadastro));
        }

        // DELETE: api/Cadastro/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCadastro(long id)
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

        private bool CadastroExists(long id)
        {
            return _context.Cadastro.Any(e => e.Id == id);
        }
        private static CadastroDTO CadastroToDTO(Cadastro cadastro) => new CadastroDTO
       {
           Id = cadastro.Id,
           Nome = cadastro.Nome,
           Email = cadastro.Email,
           Atividade = cadastro.Atividade
           //Usuario = cadastro.Usuario
       };
}
}
