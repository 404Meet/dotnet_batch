// See https://aka.ms/new-console-template for more information
class program
{
    static void Main()
    {
        int[] numbers = new int[7] { 0, 1, 2, 3, 4, 5, 6 };

        var numQ =
            from num in numbers
            where (num % 2) == 0
            select num;
        foreach (int num in numQ)
        {
            Console.WriteLine("{0,1}", num);
        }
    }
}