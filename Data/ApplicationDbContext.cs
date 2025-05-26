using doblen.Models;
using Microsoft.EntityFrameworkCore;

namespace doblen.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // هنا تضيف DbSet للكيانات (الجداول) بتاعتك، مثال:
        public DbSet<blog> blog { get; set; }
        public DbSet<User> User { get; set; }
    }
}
