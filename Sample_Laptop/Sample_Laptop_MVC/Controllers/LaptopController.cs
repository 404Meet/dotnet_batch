using Microsoft.AspNetCore.Mvc;
using Sample_Laptop_MVC.Data;
using Sample_Laptop_MVC.Models;

namespace Sample_Laptop_MVC.Controllers
{
    public class LaptopController : Controller
    {

        private readonly ApplicationDbContext _db;
        public LaptopController(ApplicationDbContext db)
        {
            _db=db;
        }

        public IActionResult Index()
        {
            IEnumerable<LaptopDetails> objLaptopList = _db.Details;
            return View(objLaptopList);
        }
    }
}
