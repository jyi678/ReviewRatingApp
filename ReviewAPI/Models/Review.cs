
using System.ComponentModel.DataAnnotations;
namespace ReviewAPI.Models
{
    public class Review
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(250)]
        public string ReviewText { get; set; }
        //[AllowedValues(typeof(string), new object[] { "Excellent","Moderate","Needs Improvement" })]
        public string RatingType {get; set; }

    }
}