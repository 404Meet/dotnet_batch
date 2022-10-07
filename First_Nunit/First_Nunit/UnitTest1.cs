using UnitTest;
// we are using UnitTest Solution for testing and sdded project reference of that. 
namespace First_Nunit
{
    [TestFixture]
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void OneThousand_G_E()
        {
            UtilityLib obj = new UtilityLib();
            Assert.AreEqual(950, obj.calculateDiscount(1000));
        }
        // Test Case#2: Sales Amount is Greater or Equal than 2000 : Verification  
        [Test]
        public void TwoThousand_G_E()
        {
            UtilityLib obj = new UtilityLib();
            Assert.AreEqual(1800, obj.calculateDiscount(2000));
        }
        // Test Case#3: Sales Amount is Greater or Equal than 5000 : Verification  
        [Test]
        public void FiveThousand_G_E()
        {
            UtilityLib obj = new UtilityLib();
            Assert.AreEqual(2500, obj.calculateDiscount(5000));
        }
        // Test Case#4: Sales Amount is 0 : Verification  
        [Test]
        public void ZeroAmount()
        {
            UtilityLib obj = new UtilityLib();
            try
            {
                obj.calculateDiscount(0);
            }
            catch (Exception e) { }
        }
        // Test Case#5: Sales Amount is below 1000 : Verification  
        [Test]
        public void OneThousand_Below()
        {
            UtilityLib obj = new UtilityLib();
            Assert.AreEqual(999, obj.calculateDiscount(999));
        }
        //__________Test for Actual Results__________  
        // Test Case#6: Sales Amount is not producing expected Result : Verification  
        [Test]
        public void OneThousand()
        {
            UtilityLib obj = new UtilityLib();
            Assert.AreNotEqual(930, obj.calculateDiscount(1000));
        }
        // Test Case#7: Sales Amount is not producing expected Result : Verification  
        [Test]
        public void TwoThousand()
        {
            UtilityLib obj = new UtilityLib();
            Assert.AreNotEqual(1900, obj.calculateDiscount(2000));
        }
    }
}