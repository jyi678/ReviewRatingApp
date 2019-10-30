using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReviewAPI.Models;

namespace ReviewAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly ReviewContext _context;

        public ReviewController(ReviewContext context)
        {
            _context = context;
        }

        // GET: api/Review
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviewRating()
        {
            return await _context.ReviewRating.ToListAsync();
        }

        // GET: api/Review/ReviewType
        [HttpGet("ReviewType")]
        public async Task<ActionResult<IEnumerable<string>>> GetReviewType()
        {
            return await _context.ReviewRating.Select(s => s.RatingType).ToListAsync();
            
        }

        // GET: api/Review/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReviewRating(int id)
        {
            var todoItem = await _context.ReviewRating.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // POST: api/Review
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Review>> PostReviewRating(Review todoItem)
        {
             if (!TodoItemExists(todoItem.Id))
                {
                    _context.ReviewRating.Add(todoItem);
                    await _context.SaveChangesAsync();
                }
            

            return CreatedAtAction(nameof(GetReviewRating), new { id = todoItem.Id }, todoItem);
        }


        private bool TodoItemExists(int id)
        {
            return _context.ReviewRating.Any(e => e.Id == id);
        }
    }
}
