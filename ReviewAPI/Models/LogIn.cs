using System.ComponentModel.DataAnnotations;

namespace ReviewAPI.Models
{
    public class LogIn
    {
        public int UserID { get; set; }
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }



    }
}