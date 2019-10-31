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
    public class LogInController : ControllerBase
    {
        private readonly LogInContext _context;

        public LogInController(LogInContext context)
        {
            _context = context;
        }

        // GET: api/LogIn
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LogIn>>> GetUser()
        {
            return await _context.LogInInfo.ToListAsync();
        }


        // POST: api/LogIn
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public IActionResult UserExist(LogIn todoItem)
        {
             if (TodoItemExists(todoItem.UserName, todoItem.Password))
                {                                        
                    return Ok(todoItem);
                }
            

            return NotFound(new { message = "Username and/or Password does not match."});
        }


        private bool TodoItemExists(string user, string psw)
        {
            return _context.LogInInfo.Any(e => e.UserName == user && e.Password == psw);
        }
    }
}
