using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using Sample_Laptop_MVC.Data;
using Sample_Laptop_MVC.Models;

namespace Sample_Laptop_MVC.Controllers
{
    public class CartController : Controller
    {
        private readonly ApplicationDbContext _db2;

        public CartController(ApplicationDbContext db)
        {
            _db2=db;
        }
        public IActionResult Index()
        {
            IEnumerable<CartDetails> objCartList = _db2.Cart;
            return View(objCartList);
        }


        //GET METHOD
        public IActionResult Show(int? ID)
        {
            //if(ID == null || ID ==0)
            //{
            //    return NotFound();
            //}
            var dataFromDb = _db2.Cart.Find(ID);

            //if(dataFromDb == null)
            //{
            //    return NotFound();
            //}
            return View(dataFromDb);
        }

        //POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Show(CartDetails obj)
        {
            _db2.Cart.Update(obj);
            _db2.SaveChanges();
            return RedirectToAction("ShowCart");
        }

        public IActionResult ShowCart()
        {
            IEnumerable<CartDetails> objCartList = _db2.Cart;
            return View(objCartList);
        }
    }
}
