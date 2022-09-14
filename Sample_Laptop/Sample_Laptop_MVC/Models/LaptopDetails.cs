using System.ComponentModel.DataAnnotations;

namespace Sample_Laptop_MVC.Models
{
    public class LaptopDetails
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        public int Ram { get; set; }
        public string Processor { get; set; }
        public string Description { get; set; }
        public string image { get; set; }
    }
}
