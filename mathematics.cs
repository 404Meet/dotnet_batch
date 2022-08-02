using System;
namespace Math {
    public class sum{
        public static void add(int a, int b)
        {
            int result=a+b;
            System.Console.WriteLine("Addition: " + result);
        }
    }
    public class subtract{
        public static void sub(int a, int b)
        {
            int result=a-b;
            System.Console.WriteLine("Subtraction: " + result);
        }

    }
    public class multiply{
        public static void mul(int a, int b)
        {
            int result=a*b;
            System.Console.WriteLine("Multiplication: " + result);
        }

    }
    public class divide{
        public static void div(int a, int b)
        {
            int result=a/b;
            System.Console.WriteLine("Division: " + result);
        }
    }
    class operations{
        public static void Main(string[] args) {
            Console.WriteLine("Enter Two Numbers: ");
            int a = Convert.ToInt32(Console.ReadLine());
            int b = Convert.ToInt32(Console.ReadLine());
            sum.add(a,b);
            subtract.sub(a,b);
            multiply.mul(a,b);
            divide.div(a,b);
            }   
     }

    }
