using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System.Collections.ObjectModel;

namespace HealthCareByABC_Specflow.StepDefinitions
{
    [Binding]
    public sealed class HealthCareStepDefinitions
    {
        private ChromeDriver chromeDriver;
        private String uname = "User1";
        private String pass = "User@123";
        private String email = "User2gmail.com";
        private String mobile = "9237461930";

        private String admin_uname = "Admin";
        private String admin_pass = "Admin@123";

        private String medicine_name = "Soframycin";
        private String medicine_expiry= "9 Month";
        private String medicine_Price = "69";
        private String medicine_description = "Soframycin Skin Cream is an antibiotic that is used for the treatment of bacterial skin infections. It works well for infected cuts, wounds, and minor burns. This medication inhibits the growth of bacteria, which aids in the resolution of your symptoms and the cure of the underlying infection.";
        private String medicine_Photo = "https://5.imimg.com/data5/YX/VY/MY-17376909/soframycin-500x500.jpg";



        public HealthCareStepDefinitions() => chromeDriver = new ChromeDriver("C:\\Users\\meet.popat\\Downloads\\chromedriver_win32");

        [Given(@"I have navigated to HealthCareByABC website")]
        public void GivenIHaveNavigatedToHealthCareByABCWebsite()
        {
            chromeDriver.Navigate().GoToUrl("http://localhost:3000/home");
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            Assert.IsTrue(chromeDriver.Title.Contains("React App"));

        }

        [Given(@"I pressed Register with Registeration keyword")]
        public void GivenIPressedRegisterWithRegisterationKeyword()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("li#Registeration"));
            searchButton.Click();

        }

        [Given(@"After Registeration I go to Login")]
        public void GivenAfterRegisterationIGoToLogin()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(1500));


            IWebElement textfield = chromeDriver.FindElement(By.CssSelector("input#uname"));
            textfield.SendKeys(uname);
            WebDriverWait wait3 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield2 = chromeDriver.FindElement(By.CssSelector("input#pass"));
            textfield2.SendKeys(pass);
            WebDriverWait wait4 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield3 = chromeDriver.FindElement(By.CssSelector("input#email"));
            textfield3.SendKeys(email);
            WebDriverWait wait5 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield4 = chromeDriver.FindElement(By.CssSelector("input#mobile"));
            textfield4.SendKeys(mobile);
            WebDriverWait wait6 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            var Button = chromeDriver.FindElement(By.CssSelector("button#reg"));
            Button.Click();
            WebDriverWait wait2 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            chromeDriver.Navigate().GoToUrl("http://localhost:3000/login");

        }

        [Given(@"In Login I enter my registered account")]
        public void GivenInLoginIEnterMyRegisteredAccount()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield = chromeDriver.FindElement(By.CssSelector("input#uname"));
            textfield.SendKeys(uname);
            WebDriverWait wait3 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield2 = chromeDriver.FindElement(By.CssSelector("input#pass"));
            textfield2.SendKeys(pass);
            WebDriverWait wait2 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            var Button = chromeDriver.FindElement(By.CssSelector("button#log"));
            Button.Click();
        }

        [Given(@"After Login User Portal will be opened")]
        public void GivenAfterLoginUserPortalWillBeOpened()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            chromeDriver.Navigate().GoToUrl("http://localhost:3000/UserPortal");
            Assert.IsTrue(chromeDriver.Title.Contains("React App"));
        }

        [Given(@"In User Portal you can check Categories")]
        public void GivenInUserPortalYouCanCheckCategories()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(12000000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("ul#categories"));
            searchButton.Click();
        }
        [Given(@"In User Portal you can also check Medicines")]
        public void GivenInUserPortalYouCanAlsoCheckMedicines()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(20000000000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("ul#medicines"));
            searchButton.Click();
        }
        [Given(@"I click on Add to Cart")]
        public void GivenIClickOnAddToCart()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(20000000000));
            chromeDriver.Navigate().GoToUrl("http://localhost:3000/Cart");
            Assert.IsTrue(chromeDriver.Title.Contains("React App"));
        }

        [When(@"I click on Pay now")]
        public void WhenIClickOnPayNow()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(20000000000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("button#total"));
            searchButton.Click();
        }

        [Then(@"Payment Receipt should be received")]
        public void ThenPaymentReceiptShouldBeReceived()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(20000000000));
            Assert.IsTrue(chromeDriver.Title.Contains("React App"));
        }

        [Given(@"I go to Login")]
        public void GivenIGoToLogin()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("li#Login"));
            searchButton.Click();
        }

        [Given(@"I enter Admin Credentials")]
        public void GivenIEnterAdminCredentials()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield = chromeDriver.FindElement(By.CssSelector("input#uname"));
            textfield.SendKeys(admin_uname);
            WebDriverWait wait3 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield2 = chromeDriver.FindElement(By.CssSelector("input#pass"));
            textfield2.SendKeys(admin_pass);
            WebDriverWait wait2 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            var Button = chromeDriver.FindElement(By.CssSelector("button#log"));
            Button.Click();
        }

        [Given(@"After Login Admin Portal will be opened")]
        public void GivenAfterLoginAdminPortalWillBeOpened()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(20000000000));
            chromeDriver.Navigate().GoToUrl("http://localhost:3000/AdminPortal");
            Assert.IsTrue(chromeDriver.Title.Contains("React App"));
        }

        [Given(@"Admin can view and edit categories")]
        public void GivenAdminCanViewAndEditCategories()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(12000000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("ul#category"));
            searchButton.Click();

        }

        [Given(@"Admin can View and edit medicines")]
        public void GivenAdminCanViewAndEditMedicines()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(12000000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("ul#medicine"));
            searchButton.Click();
        }

        [When(@"Admin adds Medicine")]
        public void WhenAdminAddsMedicine()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(12000000));
            var searchButton = chromeDriver.FindElement(By.CssSelector("button#add"));
            searchButton.Click();

        }

        [Then(@"Medicines are updated")]
        public void ThenMedicinesAreUpdated()
        {
            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield = chromeDriver.FindElement(By.CssSelector("input#name"));
            textfield.SendKeys(medicine_name);
            WebDriverWait wait3 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield2 = chromeDriver.FindElement(By.CssSelector("input#exp"));
            textfield2.SendKeys(medicine_expiry);
            WebDriverWait wait4 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield3 = chromeDriver.FindElement(By.CssSelector("input#price"));
            textfield3.SendKeys(medicine_Price);
            WebDriverWait wait5 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield4 = chromeDriver.FindElement(By.CssSelector("input#desc"));
            textfield4.SendKeys(medicine_description);
            WebDriverWait wait6 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            IWebElement textfield5 = chromeDriver.FindElement(By.CssSelector("input#photo"));
            textfield5.SendKeys(medicine_Photo);

            WebDriverWait wait2 = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(120000));
            var Button = chromeDriver.FindElement(By.XPath("/html/body/div[1]/div/div/div[2]/div[2]/div/div/div[2]/ul/button"));
            Button.Click();
        }

    }
}