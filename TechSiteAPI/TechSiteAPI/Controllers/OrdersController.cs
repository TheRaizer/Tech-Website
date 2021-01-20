using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly TechDbContext _context;

        public OrdersController(TechDbContext context)
        {
            _context = context;
        }

        //GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.ORDS.ToListAsync();
        }

        //GET: api/Orders/{id}/get-order
        [HttpGet("{orderId}/get-order")]
        public async Task<ActionResult<Order>> GetOrder(int orderId)
        {
            var order = await _context.ORDS.FindAsync(orderId);
            if (order == null)
            {
                return NotFound();
            }
            await _context.Entry(order).Collection(o => o.OrderProducts).LoadAsync();

            return order;
        }
        //GET: api/Orders/{id}/orders"
        [HttpGet("{userId}/get-user-orders")]
        public async Task<ActionResult<IEnumerable<Order>>> GetUserOrders(int userId)
        {
            var user = await _context.USERS.FindAsync(userId);
            if (user == null)
            {
                return BadRequest();
            }
            //var orders = await _context.ORDS.Where(o => o.USER_ID == userId).ToListAsync();// if the load async doesnt load everything use this line instead
            await _context.Entry(user).Collection(o => o.Orders).LoadAsync();
            var orders = user.Orders.ToList();
            if (orders == null || orders.Count == 0)
            {
                return NotFound();
            }
            return orders;
        }
        // POST: api/Orders/post-order
        [HttpPost("post-order")]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.ORDS.Add(order);
            await _context.SaveChangesAsync();
            /*this calls GetOrder() to get the order with the given orderId as the order.orderId. The new {orderId}
             * must be named exactly as the parameter in the GetOrder() function called by the "GetOrder" string.
             */
            return CreatedAtAction("GetOrder", new { orderId = order.ORD_ID }, order);
        }

        //GET: api/Orders/{id}/get-pending-order
        [HttpGet("get-pending-order")]
        public async Task<ActionResult<Order>> GetPendingOrder()
        {
            return await _context.ORDS.FirstOrDefaultAsync(x => x.STATUS_CD == "0");
        }
    }
}
