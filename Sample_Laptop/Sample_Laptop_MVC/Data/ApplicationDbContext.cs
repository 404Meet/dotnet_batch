using Microsoft.EntityFrameworkCore;
using Sample_Laptop_MVC.Models;

namespace Sample_Laptop_MVC.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<LaptopDetails>Details{ get; set; }

        public DbSet<CartDetails> Cart{ get; set; }
        public DbSet<Account> Account { get; set; }
    }
}
