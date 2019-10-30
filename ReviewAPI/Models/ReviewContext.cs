using Microsoft.EntityFrameworkCore;

namespace ReviewAPI.Models
{
    public class ReviewContext : DbContext
    {
        public ReviewContext(DbContextOptions<ReviewContext> options)
            : base(options)
        {
        }

        public DbSet<Review> ReviewRating { get; set; }
    }
}