using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TechSiteAPI.Models;

namespace TechSiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly UserDbContext _context;

        public OrdersController(UserDbContext context)
        {
            _context = context;
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
        //GET: api/Users/{id}/orders"
        [HttpGet("{id}/orders")]
        public async Task<ActionResult<IEnumerable<Order>>> GetUserOrders(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return BadRequest();
            }
            var orders = user.Orders.ToList();
            if (orders == null)
            {
                return NotFound();
            }
            return orders;
        }
        // POST: api/Users/postorder
        [HttpPost("postorder")]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            /*this calls GetOrder() to get the order with the given orderId as the order.orderId. The new {orderId}
             * must be named exactly as the parameter in the GetOrder() function called by the "GetOrder" string.
             */
            return CreatedAtAction("GetOrder", new { orderId = order.OrderId }, order);
        }
    }
}
