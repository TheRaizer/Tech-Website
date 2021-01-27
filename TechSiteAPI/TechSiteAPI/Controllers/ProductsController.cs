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

        //GET: api/Products/{productId}/get-product
        [HttpGet("{productId}/get-product")]
        public async Task<ActionResult<Product>> GetProduct(int productId)
        {
            var product = await _context.PRODS.FindAsync(productId);
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //GET: api/Products/get-by-category"
        [HttpGet("{productCategoryCode}/get-by-category")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategoryCode(string productCategoryCode)
        {
            var products = await _context.PRODS.ToListAsync();
            List<Product> matchingProducts = new List<Product>();

            matchingProducts = products.FindAll(x => x.PROD_CTGRY_CD == productCategoryCode);

            if (matchingProducts.Count == 0)
            {
                return BadRequest();
            }

            return matchingProducts;
        }
        //GET: api/Products/get-by-category"
        [HttpGet("{categoryCode}/get-category")]
        public async Task<ActionResult<string>> GetCategoryFromCode(string categoryCode)
        {
            var codeLookUp =  await _context.CD_LKUP.FirstOrDefaultAsync(x => x.TYPE == "PROD_CTGRY" && x.CD_VAL == categoryCode);

            if(codeLookUp == null)
            {
                return NotFound();
            }

            return codeLookUp.DESC;
        }
    }
}
