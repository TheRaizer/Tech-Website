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

        //GET: api/Orders/{UUID}/get-order-by-UUID 
        [HttpGet("{UUID}/get-order-by-UUID")]
        public async Task<ActionResult<Order>> GetOrderByUUID(string UUID)
        {
            var order = await _context.ORDS.FirstOrDefaultAsync(x => x.ORD_UUID == UUID);
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
            Order order =  await _context.ORDS.FirstOrDefaultAsync(x => x.STATUS_CD == "0");

            if (order != null)
            {
                await _context.Entry(order).Collection(o => o.OrderProducts).LoadAsync();
                foreach(OrderProduct op in order.OrderProducts)
                {
                    await _context.Entry(op).Reference(op => op.Product).LoadAsync();
                }
                return order;
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPut("{orderId}")]
        public async Task<IActionResult> PutOrder(int orderId, Order order)
        {
            order.ORD_ID = orderId;

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(orderId))
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

        //GET: api/Orders/get-status"
        [HttpGet("{statusCode}/get-status")]
        public async Task<ActionResult<string>> GetStatusFromCode(string statusCode)
        {
            var codeLookUp = await _context.CD_LKUP.FirstOrDefaultAsync(x => x.TYPE == "STATUS" && x.CD_VAL == statusCode);

            if (codeLookUp == null)
            {
                return NotFound();
            }

            return codeLookUp.DESC;
        }

        private bool OrderExists(int orderId)
        {
            return _context.ORDS.Any(o => o.ORD_ID == orderId);
        }
    }
}
