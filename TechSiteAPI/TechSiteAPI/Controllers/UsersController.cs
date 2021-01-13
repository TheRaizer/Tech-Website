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
        private readonly UserDbContext _context;

        public UsersController(UserDbContext context)
        {
            _context = context;
        }

        //GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        //GET: api/Users/{email}&{password}/get
        [HttpGet("{email}&{password}/get")]
        public async Task<ActionResult<User>> GetUserByEmailAndPassword(string email, string password)
        {
            var users = await _context.Users.ToListAsync();
            User matchingUser = users.First(x => x.UserEmail == email && x.Password == password);

            if(matchingUser == null)
            {
                //return null;
                return NotFound();
            }

            return matchingUser;
        }

        //GET: api/Users/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        //GET: api/Users/{id}
        [HttpGet("{orderId}/getorder")]
        public async Task<ActionResult<Order>> GetOrder(int orderId)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null)
            {
                return NotFound();
            }

            return order;
        }
        //GET: api/Users/{id}/username/
        [HttpGet("{id}/username/")]
        public async Task<ActionResult<string>> GetUserUsername(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return user.Username;
        }


        //GET: api/Users/{email}/username/
        [HttpGet("{email}/checkexists/")]
        public async Task<ActionResult<bool>> UserWithEmailExists(string email)
        {
            return await _context.Users.AnyAsync(x => x.UserEmail == email);
        }

        // PUT: api/Users/{id}
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            user.UserId = id;

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
        [HttpPost("postuser")]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }


        // DELETE: api/Users/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
