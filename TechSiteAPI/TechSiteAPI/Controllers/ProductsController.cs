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
    public class ProductsController : ControllerBase
    {
        private readonly TechDbContext _context;

        public ProductsController(TechDbContext context)
        {
            _context = context;
        }

        //GET: api/Products/getByCategory"
        [HttpGet("{productCategory}/get-by-category")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(string productCategory)
        {
            var products = await _context.Products.ToListAsync();
            List<Product> matchingProducts = new List<Product>();
            matchingProducts = products.FindAll(x => x.ProductCategory == productCategory);

            if (matchingProducts.Count == 0)
            {
                return BadRequest();
            }

            return matchingProducts;
        }
    }
}
