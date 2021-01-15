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
        public async Task<ActionResult<Product>> GetOrderProduct(int id)
        {
            var product = await _context.PRODS.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
        //POST: api/OrderProducts/post-orderproduct
        [HttpPost("post-orderproduct")]
        public async Task<ActionResult<Product>> PostOrderProduct(OrderProduct orderProduct)
        {
            _context.ORD_PRODS.Add(orderProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderProduct", new { id = orderProduct.ORD_PRD_ID }, orderProduct);
        }
    }

}
