using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechSiteAPI.Models;

namespace TechSiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly TechDbContext _context;

        public UsersController(TechDbContext context)
        {
            _context = context;
        }

        //GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.USERS.ToListAsync();
        }

        //GET: api/Users/{email}&{password}/get
        [HttpGet("{email}&{password}/get")]
        public async Task<ActionResult<User>> GetUserByEmailAndPassword(string email, string password)
        {
            var users = await _context.USERS.ToListAsync();
            User matchingUser = users.First(x => x.USER_EMAIL == email && x.PASSWORD == password);

            if(matchingUser == null)
            {
                //return null;
                return NotFound();
            }
            await _context.Entry(matchingUser).Collection(u => u.Orders).LoadAsync();//explicit loading
            return matchingUser;
        }

        //GET: api/Users/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.USERS.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            await _context.Entry(user).Collection(u => u.Orders).LoadAsync();//explicit loading
            return user;
        }

        //GET: api/Users/{id}/username/
        [HttpGet("{id}/username/")]
        public async Task<ActionResult<string>> GetUserUsername(int id)
        {
            var user = await _context.USERS.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return user.USERNAME;
        }


        //GET: api/Users/{email}/username/
        [HttpGet("{email}/check-exists/")]
        public async Task<ActionResult<bool>> UserWithEmailExists(string email)
        {
            return await _context.USERS.AnyAsync(x => x.USER_EMAIL == email);
        }

        // PUT: api/Users/{id}
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            user.USER_ID = id;

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // POST: api/Users/postuser
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost("post-user")]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.USERS.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.USER_ID }, user);
        }


        // DELETE: api/Users/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.USERS.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _context.USERS.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.USERS.Any(e => e.USER_ID == id);
        }
    }
}
