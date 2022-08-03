using System;
namespace stringswap{
    class swap{
        public static void swap1(ref string one, ref string two){
            one = "Hi";
            two = "hello";
         }
        public static void Main(string[] args)
        {
            string one = "hello ";
            string two = "Hi";
            System.Console.WriteLine(one+" "+two);
            swap1(ref one, ref two);
            System.Console.WriteLine(one+" "+two);
         
        }
    }
}