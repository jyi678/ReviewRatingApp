using Microsoft.EntityFrameworkCore;

namespace ReviewAPI.Models
{
    public class LogInContext : DbContext
    {
        public LogInContext(DbContextOptions<LogInContext> options)
            : base(options)
        {
        }

        public DbSet<LogIn> LogInInfo { get; set; }
    }
}