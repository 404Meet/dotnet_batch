using System;
    class new1
    {
          static void Main(string args[])
          {
            byte[] B ={2,4,6,8,10};
            System.Console.WriteLine("B Array is:{0}",BitConverter.ToString(B));
            System.Console.WriteLine();
            String str =Convert.ToBase64String(B);
            System.Console.WriteLine("Base 64 string is: {0}", str);
          }
    }