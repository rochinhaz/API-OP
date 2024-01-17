using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using OperacaoCuriosidade.Entities;
using OperacaoCuriosidade.Persistence;

namespace OperacaoCuriosidade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly DataDbContext _context;

        public UsuarioController(DataDbContext context)
        {
            _context = context;
        }


        // GET: api/Usuario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsuarioDTO>>> GetUsuario()
        {
            return await _context.Usuario.Select(x => UsuarioToDTO(x)).ToListAsync();
        }

        // GET: api/Usuario/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioDTO>> GetUsuario(Guid id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null)
            {
                return NotFound();
            }

            return UsuarioToDTO(usuario);
        }

        // PUT: api/Usuario/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(Guid id, UsuarioDTO usuarioDTO)
        {
            if (id != usuarioDTO.Id)
            {
                return BadRequest();
            }

            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            usuario.Nome = usuarioDTO.Nome;
            usuario.Email = usuarioDTO.Email;
            usuario.Senha = usuarioDTO.Senha;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!UsuarioExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }
        // GET: api/Usuario/LOGIN?Email=rocha%40hotmail.com&Senha=123123123
        [HttpGet("LOGIN")]
        public async Task<ActionResult<IEnumerable<UsuarioDTO>>> GetUsuario([FromQuery] string Email, string Senha)
        {
            var login = await _context.Usuario.Where(n => n.Email == Email).Where(s => s.Senha == Senha).ToListAsync();

            if (login == null)
            {
                return NotFound();
            }

            return Ok(login);
        }

        // POST: api/Usuario
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UsuarioDTO>> PostUsuario(UsuarioDTO usuarioDTO)
        {
            var usuario = new Usuario
            {
                Nome = usuarioDTO.Nome,
                Email = usuarioDTO.Email,
                Senha = usuarioDTO.Senha
            };

            _context.Usuario.Add(usuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetUsuario),
                new { id = usuario.Id },
                UsuarioToDTO(usuario));
        }

        // DELETE: api/Usuario/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(Guid id)
        {
            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuario.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(Guid id)
        {
            return _context.Usuario.Any(e => e.Id == id);
        }
        private static UsuarioDTO UsuarioToDTO(Usuario usuario) =>
       new UsuarioDTO
       {
           Id = usuario.Id,
           Nome = usuario.Nome,
           Email = usuario.Email,
           Senha = usuario.Senha
       };
    }
}
