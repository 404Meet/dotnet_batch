using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace Sample_Laptop_MVC.Models
{
    public class Account
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email { get; set; }
        public long Mobile { get; set; }
    }
}
