using System.ComponentModel.DataAnnotations.Schema;

namespace doblen.Models
{
    public class blog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Img { get; set; }
        [NotMapped]
        public IFormFile File { get; set; }

    }
}
