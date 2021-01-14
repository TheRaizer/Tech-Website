using Microsoft.EntityFrameworkCore;

namespace TechSiteAPI.Models
{
    public class TechDbContext : DbContext
    {
        public TechDbContext(DbContextOptions<TechDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }
    }
}
