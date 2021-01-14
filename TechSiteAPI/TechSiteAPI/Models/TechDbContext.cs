using Microsoft.EntityFrameworkCore;

namespace TechSiteAPI.Models
{
    public class TechDbContext : DbContext
    {
        public TechDbContext(DbContextOptions<TechDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CD_LookUp>(x => x.HasNoKey());
        }


        public DbSet<User> USERS { get; set; }
        public DbSet<Order> ORDS { get; set; }
        public DbSet<Product> PRODS { get; set; }
        public DbSet<OrderProduct> ODR_PRODS { get; set; }
        public DbSet<CD_LookUp> CD_LKUP { get; set; }
    }
}
