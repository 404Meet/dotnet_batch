using Microsoft.AspNetCore.Mvc;
using Sample_Laptop_MVC.Data;
using Sample_Laptop_MVC.Models;

namespace Sample_Laptop_MVC.Controllers
{
    public class AccountController : Controller
    {

        private readonly ApplicationDbContext _db3;

        public AccountController(ApplicationDbContext db)
        {
            _db3=db;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SignUp(Account obj)
        {
            _db3.Account.Add(obj);
            _db3.SaveChanges();
            return RedirectToAction("Index","Laptop");
        }
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(Account obj)
        {
            string u = obj.UserName;
            string p = obj.Password;
            var data = _db3.Account.Where(x => x.UserName.Equals(u) && x.Password.Equals(p)).ToList();
            if(data.Count > 0)
            {
                return RedirectToAction("Index","Laptop");
            }
            return RedirectToAction("Login");
        }
    }
}
