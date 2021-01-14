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

        //GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.PRODS.ToListAsync();
        }

        //GET: api/Products/get-by-category"
        [HttpGet("{productCategory}/get-by-category")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(string productCategory)
        {
            var products = await _context.PRODS.ToListAsync();
            List<Product> matchingProducts = new List<Product>();
            matchingProducts = products.FindAll(x => x.PROD_CTGRY_CD == productCategory);

            if (matchingProducts.Count == 0)
            {
                return BadRequest();
            }

            return matchingProducts;
        }
    }
}
