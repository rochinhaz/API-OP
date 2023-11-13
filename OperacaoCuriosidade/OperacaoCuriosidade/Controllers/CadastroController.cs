using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OperacaoCuriosidade.Model;

namespace OperacaoCuriosidade.Controllers
{
    [Route("api/[Controller]")]
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
          /*if (_context.Cadastro == null)
          {
              return NotFound();
          }*/
            return await _context.Cadastro.Select(x => CadastroToDTO(x))
                .ToListAsync();
        }

        //private object ItemToDTO(Cadastro x)
        //{
          //  throw new NotImplementedException();
        //}

        // GET: api/Cadastro/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CadastroDTO>> GetCadastro(long id)
        {
          /*if (_context.Cadastro == null)
          {
              return NotFound();
          }*/
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

            cadastro.nome = cadastroDTO.nome;
            cadastro.email = cadastroDTO.email;
            cadastro.atividade = cadastroDTO.atividade;

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

        /*public async Task<ActionResult<Cadastro>> PostCadastro(Cadastro cadastro)
        {
          if (_context.Cadastro == null)
          {
              return Problem("Entity set 'TodoContext.Cadastro'  is null.");
          }
            _context.Cadastro.Add(cadastro);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCadastro), new { id = cadastro.Id }, cadastro);
        }*/
        [HttpPost]
        public async Task<ActionResult<CadastroDTO>> PostCadastro(CadastroDTO cadastroDTO)
        {
            var cadastro = new Cadastro
            {
                nome = cadastroDTO.nome,
                email = cadastroDTO.email,
                atividade = cadastroDTO.atividade
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
            if (_context.Cadastro == null)
            {
                return NotFound();
            }
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
            return (_context.Cadastro?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        private static CadastroDTO CadastroToDTO(Cadastro Cadastro) => new CadastroDTO
        {
          Id = Cadastro.Id,
          nome = Cadastro.nome,
          email = Cadastro.email,
          atividade = Cadastro.atividade
        };
    }
}
