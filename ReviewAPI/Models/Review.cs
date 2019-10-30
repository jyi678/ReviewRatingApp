namespace ReviewAPI.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ReviewText { get; set; }

        public string RatingType {get; set; }

    }
}