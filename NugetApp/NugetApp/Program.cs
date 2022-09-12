using System;
using System.Text;
namespace StringUse
{

    public class String
    {
        public static void str()
        {
            string first = "Hello";
            string second = " My Name";
            string third = " is Meet";
            string New = string.Concat(first, second, third);
            System.Console.WriteLine(New);
        }

    }
    public class StringBd
    {
        public static void strbd()
        {
            StringBuilder addword = new StringBuilder("HELLO ");
            addword.Append(" Meet");
            addword.Append(" Hey");
            System.Console.WriteLine(addword);
        }
    }
    public class Operate
    {
        public static void Main(string[] args)
        {
            Operate op = new Operate();
            StringUse.String.str();
            StringUse.StringBd.strbd();
        }
    }
}