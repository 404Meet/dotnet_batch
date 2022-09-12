using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Consume_Math_Service
{
    internal class Program
    {
        static void Main(string[] args)
        {
            localhost.MathService myMathService = new localhost.MathService();
            Console.Write("6 + 4 = {0}", myMathService.Add(6, 4));
            Console.ReadLine();
        }
    }
}
