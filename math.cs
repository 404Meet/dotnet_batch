using System;
namespace Math {
    class Operations {
        static void Main(string[] args) {
            Console.WriteLine("Enter Two Numbers: ");
            int a = Convert.ToInt32(Console.ReadLine());
            int b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Addition: " + a + " + " + b + " = " + (a + b));
            Console.WriteLine("Subtraction: " + a + " - " + b + " = " + (a - b));
            Console.WriteLine("Multiplication: " + a + " * " + b + " = " + (a * b));
            Console.WriteLine("Division: " + a + " / " + b + " = " + (a / b));
        }
    }
}