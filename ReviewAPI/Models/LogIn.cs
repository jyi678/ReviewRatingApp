using System.ComponentModel.DataAnnotations;

namespace ReviewAPI.Models
{
    public class LogIn
    {
        public int UserID { get; set; }
        [Key]
        [StringLength(50)]
        public string UserName { get; set; }
        [StringLength(50)]
        public string Password { get; set; }



    }
}