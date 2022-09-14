using System.ComponentModel.DataAnnotations;
namespace Sample_Laptop_MVC.Models
{
    public class CartDetails
    {
        
            [Key]
            public int ID { get; set; }
            [Required]
            public string Name { get; set; }
            [Required]
            public int Price { get; set; }
            public int quantity { get; set; }
    }
}
