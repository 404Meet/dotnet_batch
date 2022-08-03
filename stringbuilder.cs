using System;
using System.Text;
namespace String{
    class String{
        public static void Main(string[] args){
            StringBuilder addword = new StringBuilder("Hi");
            addword.Append(" Meet");
            addword.Append(" Hey");
            System.Console.WriteLine(addword);
        }
    }
}