
//using NUnit.Framework;
//using OpenQA.Selenium;
//using OpenQA.Selenium.Chrome;
//using System;
 
//namespace Selenium_Automation
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            IWebDriver driver = new ChromeDriver("C:\\Users\\meet.popat\\Downloads\\chromedriver_win32");

//            // This will open up the URL
//            driver.Url = "https://www.geeksforgeeks.org/";
//        }
//    }
//}

using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Guru99Demo
{
    class Guru99Demo
    {

        IWebDriver driver;

        [SetUp]
        public void startBrowser()
        {
            driver = new ChromeDriver("C:\\Users\\meet.popat\\Downloads\\chromedriver_win32");
        }

        [Test]
        public void test()
        {
            driver.Url = "http://www.google.co.in";
        }

        [TearDown]
        public void closeBrowser()
        {
            driver.Close();
        }

    }
}