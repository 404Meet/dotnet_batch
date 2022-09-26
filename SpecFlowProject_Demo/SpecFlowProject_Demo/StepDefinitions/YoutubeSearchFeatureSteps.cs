using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using TechTalk.SpecFlow;

namespace SepcflowSelenium.StepDefinitions
{
    [Binding]
    public class YoutubeSearchFeatureSteps : IDisposable
    {
        private String searchKeyword;

        private ChromeDriver chromeDriver;

        public YoutubeSearchFeatureSteps() => chromeDriver = new ChromeDriver("C:\\Users\\meet.popat\\Downloads\\chromedriver_win32");
        

        [When(@"I press the search button")]
        public void WhenIPressTheSearchButton()
        {
            var searchButton = chromeDriver.FindElement(By.CssSelector("button#search-icon-legacy"));
            searchButton.Click();
        }

        [Given(@"I have navigated to youtube website")]
        public void GivenIHaveNavigatedToYoutubeWebsite()
        {
            chromeDriver.Navigate().GoToUrl("https://www.youtube.com");
            Assert.IsTrue(chromeDriver.Title.ToLower().Contains("youtube"));
        }

        //[Given(@"I have entered (.*) as search keyword")]
        //public void GivenIHaveEnteredIndiaAsSearchKeyword(String searchString)
        //{
        //    this.searchKeyword = searchString.ToLower();
        //    var searchInputBox = chromeDriver.FindElement(By.Id("search"));
        //    var wait = new WebDriverWait(chromeDriver, TimeSpan.FromSeconds(200));
        //    wait.Until(ExpectedConditions.ElementIsVisible(By.Id("search")));
        //    searchInputBox.SendKeys(searchKeyword);
        //}

        [Given(@"I have entered (.*) as search keyword")]
        public void GivenIHaveEnteredIndiaAsSearchKeyword(String searchString)
        {
            this.searchKeyword = searchString.ToLower();

            WebDriverWait wait = new WebDriverWait(chromeDriver, TimeSpan.FromMilliseconds(1500));
            var elementsWithSearchID = wait.Until((driver) => driver.FindElements(By.Id("search")));
            var search = elementsWithSearchID.Where(e => e.TagName == "input").FirstOrDefault();
            search.SendKeys(searchKeyword);


        }

        [Then(@"I should be navigate to search results page")]
        public void ThenIShouldBeNavigateToSearchResultsPage()
        {

            System.Threading.Thread.Sleep(2000);
            // After search is complete the keyword should be present in url as well as page title`
            Assert.IsTrue(chromeDriver.Url.ToLower().Contains(searchKeyword));
            Assert.IsTrue(chromeDriver.Title.ToLower().Contains(searchKeyword));
        }


        public void Dispose()
    {
        if (chromeDriver != null)
        {
            chromeDriver.Dispose();
            chromeDriver = null;
        }
    }
}
}