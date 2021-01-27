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
    public class OrderProductsController : ControllerBase
    {
        private readonly TechDbContext _context;

        public OrderProductsController(TechDbContext context)
        {
            _context = context;
        }

        //GET: api/OrderProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderProduct>>> GetOrderProducts()
        {
            return await _context.ORD_PRODS.ToListAsync();
        }

        //GET: api/OrderProducts/get-orderproduct
        [HttpGet("{id}/get-orderproduct")]
        public async Task<ActionResult<OrderProduct>> GetOrderProduct(int id)
        {
            var orderProduct = await _context.ORD_PRODS.FindAsync(id);

            if (orderProduct == null)
            {
                return NotFound();
            }
            return orderProduct;
        }

        [HttpPut("{orderProductId}")]
        public async Task<IActionResult> PutOrderProduct(int orderProductId, OrderProduct orderProduct)
        {
            orderProduct.ORD_PRD_ID = orderProductId;

            _context.Entry(orderProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderProductExists(orderProductId))
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

        //POST: api/OrderProducts/post-orderproduct
        [HttpPost("post-orderproduct")]
        public async Task<ActionResult<OrderProduct>> PostOrderProduct(OrderProduct orderProduct)
        {
            _context.ORD_PRODS.Add(orderProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderProduct", new { id = orderProduct.ORD_PRD_ID }, orderProduct);
        }

        private bool OrderProductExists(int orderProductId)
        {
            return _context.ORD_PRODS.Any(op => op.ORD_PRD_ID == orderProductId);
        }
    }

}
